<template>
  <router-view />
</template>

<script setup lang="ts">
  import Layout from '@/Layout/index.vue';
  import { useRoute } from 'vue-router  ';

  const route = useRoute();
  console.log('route.meta', route.meta);
</script>

<style scoped lang="scss"></style>
