const defaultState = {
  isMenuExpand: true // 菜单默认是打开的
};

const layoutModule = {
  state() {
    return defaultState;
  },
  mutations: {
    toggleMenu(state: typeof defaultState) {
      state.isMenuExpand = !state.isMenuExpand;
    }
  }
};

export default layoutModule;
