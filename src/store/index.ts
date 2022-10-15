import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

import layout from './modules/layout';

const defaultState = {
  count: 0
};

const allStore = createStore({
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

export const key: InjectionKey<typeof allStore> = Symbol();

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}

export default allStore;
