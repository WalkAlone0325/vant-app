import Vue from 'vue';
import Vuex from 'vuex';
import createLoadingPlugin from 'utils/vuex-loading';

Vue.use(Vuex);

// vuex本地储存插件
function vuexlocal() {
  return (store) => {
    const local = JSON.parse(localStorage.getItem('myVuex')) || store.state;
    store.replaceState(local); // 替换state中的数据
    store.subscribe((mutation, state) => {
      const newState = JSON.parse(JSON.stringify(state));
      localStorage.setItem('myVuex', JSON.stringify(newState));
    });
  };
}

export default new Vuex.Store({
  plugins: [createLoadingPlugin(), vuexlocal()],
  state: {
    number: 1,
  },
  mutations: {
    oneAsync(state, payload) {
      state.number += payload;
    },
  },
  actions: {
    oneAsync({ commit }, payload) {
      return new Promise((res, rej) => {
        window.setTimeout(() => {
          res();
          commit('oneAsync', payload);
        }, 2000);
      });
    },
  },
  modules: {
  },
});
