import { defineStore } from 'pinia';
import { geUserInfo } from '@/api/user';

export const useMenuStore = defineStore('menu', {
  state: () => {
    return {
      collapse: false,
      userInfo: { username: '' },
      roleInfo: { name: '', code: '' },
      permissions: [],
      menuTags: [{ fullPath: '/home', name: 'home', title: '首页' }]
    };
  },
  actions: {
    toggleMenu() {
      this.collapse = !this.collapse;
    },
    async fetchUserInfo() {
      const { data } = await geUserInfo();
      const { user, role, permissions } = data;
      this.userInfo = user;
      this.roleInfo = { code: role.roleCode, name: role.roleName };
      this.permissions = permissions;
    },
    addMenuTag(route: any) {
      const { fullPath, name, meta } = route;
      let flag = this.menuTags.some((item) => item.fullPath === fullPath);
      if (!flag) {
        this.menuTags.push({ fullPath, name, title: meta.title });
      }
    }
  }
});
