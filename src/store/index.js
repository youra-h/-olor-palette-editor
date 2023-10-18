import { createStore } from 'vuex';
import axios from 'axios';
import Files from '../classes/files.js';
import Css from '../classes/css.js';
import ParseTheme from '@/classes/parse-theme.js';

const store = {
    state: {
        cssFiles: [],
        searchFiles: [],
        theme: new ParseTheme()
    },
    getters: {
        cssFiles: state => state.cssFiles,
        searchFiles: state => state.searchFiles,
        theme: state => state.theme
    },
    mutations: {
        addCssFile(state, cssFile) {
            state.cssFiles.push(cssFile);
        },
        removeCssFile(state, cssFile) {
            state.cssFiles = state.cssFiles.filter(item => item !== cssFile);
        },
        setSearchFiles(state, files) {
            state.searchFiles = files;
        },
        setTheme(state, theme) {
            state.theme = theme;
        }
    },
    actions: {
        async addCssFile({ commit }, cssFile) {
            const text = await Files.getText(cssFile);

            const item = {
                file: cssFile,
                fileName: cssFile.name,
                text,
                css: new Css(text)
            }

            commit('addCssFile', item);
        },
        removeCssFile({ commit }, cssFile) {
            commit('removeCssFile', cssFile);
        },
        async fetchSearchFiles({ commit }) {
            // получение списка файлов
            const response = await axios.get('http://www.b1.local/test/fetch-search-files');

            commit('setSearchFiles', response.data);
        },
        async findClasses({ state }, classes) {
            // number of parts to split the searchFiles array into
            const n = 2;

            // calculate the size of each part
            const size = Math.ceil(state.searchFiles.length / n);

            // split the searchFiles array into n parts
            const searchFilesParts = Array.from({ length: n }, (_, i) => state.searchFiles.slice(i * size, (i + 1) * size));

            // send parallel requests to the server with each part of the searchFiles array and the classes
            const responses = await Promise.all(searchFilesParts.map(files => axios.post('http://www.b1.local/test/find-classes',
                { files, classes },
                {
                    headers: {
                        'Content-Type': 'text/plain;charset=UTF-8'
                    }
                })));

            // combine the results of the parallel requests
            const combinedClasses = responses.reduce((result, response) => {
                const classes = response.data.classes;
                for (let i = 0; i < classes.length; i++) {
                    if (result[i] === undefined) {
                        result[i] = classes[i];
                    } else {
                        result[i].found = result[i].found || classes[i].found;
                    }
                }
                return result;
            }, []);

            let combinedFiles = [];

            if (!combinedClasses.some(c => !c.found)) {
                // send parallel requests to the server with each part of the searchFiles array and the classes
                combinedFiles = responses.reduce((result, response) => [...result, ...response.data.files], []);
            }

            return combinedFiles;
        },
        parseTheme({ state }, text) {
            state.theme.parse(text);
        },
        setTolerance({ state }, value) {
            state.theme.tolerance = value;
        }
    }
};

export default createStore(store);
