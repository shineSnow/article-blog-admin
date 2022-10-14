<template>
  <router-view />
</template>

<script setup lang="ts">
  import Layout from '@/Layout/index.vue';
  import { useRoute } from 'vue-router';
  import { useMenuStore } from '@/store/menu';
  import { wsCache } from '@/utils/web-storage-cache';

  const menuStore = useMenuStore();
  console.log('token', wsCache.get('toke1n'));
  if (wsCache.get('token')) {
    menuStore.fetchUserInfo();
  }
</script>

<style scoped lang="scss"></style>
