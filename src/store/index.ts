import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters'
import userInfoMessage from './modules/use-info';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        userInfoMessage
    },
    getters
});


export default store;
