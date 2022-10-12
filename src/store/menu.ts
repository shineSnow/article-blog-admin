import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      collapse: false
    };
  },
  actions: {
    toggleMenu() {
      this.collapse = !this.collapse;
    }
  }
});
