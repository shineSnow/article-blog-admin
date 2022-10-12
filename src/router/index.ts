import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/home.vue';
import Vuex from '@/views/vuex.vue';

const dynmicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import('@/views/axios.vue')
  }
];

const constantRouters = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      staticRouter: true
    }
  }
];

const routes: Array<RouteRecordRaw> = [...dynmicRoutes, ...constantRouters];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
