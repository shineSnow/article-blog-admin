<template>
  <router-view />
</template>

<script setup lang="ts">
  import Layout from '@/Layout/index.vue';
  import { useRoute } from 'vue-router';
  import { useMenuStore } from '@/store/menu';
  import { wsCache } from '@/utils/web-storage-cache';
  import router from './router';

  const menuStore = useMenuStore();
  const token = wsCache.get('token');
  console.log('token111', wsCache.get('toke'));
  if (token) {
    menuStore.fetchUserInfo();
  } else {
    // router.replace({ path: '/login' });
  }
</script>

<style scoped lang="scss"></style>
