import { createStore } from 'vuex';

const store = {
    state: {
        cssFiles: [],
    },
    getters: {
        cssFiles: state => state.cssFiles,
    },
    mutations: {
        addCssFile(state, cssFile) {
            state.cssFiles.push(cssFile);
        }, 
        removeCssFile(state, cssFile) {
            state.cssFiles = state.cssFiles.filter(item => item !== cssFile);
        },       
    },
    actions: {
        addCssFile({ commit }, cssFile) {
            commit('addCssFile', cssFile);
        },
        removeCssFile({ commit }, cssFile) {
            commit('removeCssFile', cssFile);
        },
    },
};

export default createStore(store);
