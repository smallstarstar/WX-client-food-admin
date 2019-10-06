import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import userInfoMessage from './modules/use-info';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        commonIp: 'http://localhost:8666',
    },
    modules: {
        userInfoMessage
    },
    getters
});


export default store;
