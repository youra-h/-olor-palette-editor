import { createStore } from 'vuex';
import axios from 'axios';
import Files from '../classes/files.js';
import Css from '../classes/css.js';

const store = {
    state: {
        cssFiles: [],
        searchFiles: [],
    },
    getters: {
        cssFiles: state => state.cssFiles,
        searchFiles: state => state.searchFiles,
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
            const n = 10;

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

            // combine the responses from all requests and return as a single result
            return responses.reduce((result, response) => [...result, ...response.data], []);
        }

    }
};

export default createStore(store);
