// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router/index';

Vue.config.productionTip = false;
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userName: ''
    },
    mutations: {
        setName(state, payload) {
            state.userName = payload.userName
        }
    },
    actions: {
        updateUserName({commit}, payload) {
            commit('setName', payload)
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},
});
