import { createStore } from 'vuex';

import layout from './modules/layout';

const defaultState = {
  count: 0
};

export default createStore({
  state() {
    return defaultState;
  },

  mutations: {
    increment(state: typeof defaultState) {
      state.count++;
    }
  },

  actions: {
    increment(context) {
      context.commit('increment');
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count;
    }
  },
  modules: {
    layout
  }
});
