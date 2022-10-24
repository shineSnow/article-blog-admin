import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useMenuStore } from '@/store/menu';

import Home from '@/views/home.vue';
import Vuex from '@/views/vuex.vue';
import Layout from '@/Layout/index.vue';
import { wsCache } from '@/utils/web-storage-cache';

const dynmicRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: 'vuex',
        name: 'vuex',
        component: Vuex
      },
      {
        path: 'axios',
        name: 'axios',
        component: () => import('@/views/axios.vue')
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    children: [
      {
        path: 'user/list',
        name: 'user-management',
        component: () => import('@/views/system/user-management.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'role/list',
        name: 'role-management',
        component: () => import('@/views/system/role-management.vue'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'permission/list',
        name: 'perm-management',
        component: () => import('@/views/system/perm-management.vue'),
        meta: {
          title: '权限管理'
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '/:catchAll(.*)', redirect: '/404', hidden: true }
];

const constantRouters = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录',
      staticRouter: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404'
    }
  }
];

const routes: Array<RouteRecordRaw> = [...constantRouters, ...dynmicRoutes];

const router = createRouter({
  scrollBehavior: () => {
    y: 0;
  },
  history: createWebHashHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = wsCache.get('token');

  if (
    // 检查用户是否已登录
    !isAuthenticated &&
    // ❗️ 避免无限重定向
    to.name !== 'Login'
  ) {
    // 将用户重定向到登录页面
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
