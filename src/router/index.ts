import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/home.vue';
import Vuex from '@/views/vuex.vue';
import Layout from '@/Layout/index.vue';

const dynmicRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
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
  // 404 page must be placed at the end !!!
  { path: '/:catchAll(.*)', redirect: '/404', hidden: true }
];

const constantRouters = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      staticRouter: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue')
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

export default router;
