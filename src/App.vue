<template>
  <router-view />
  <Layout>
    <router-view />
  </Layout>
</template>

<script setup lang="ts">
  import Layout from '@/Layout/index.vue';
  import { useRoute } from 'vue-router  ';

  const route = useRoute();
  console.log('route', route);
</script>

<style scoped lang="scss"></style>
