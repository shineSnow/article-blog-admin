<template>
  <div class="home">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-input v-model="input" placeholder="Please input" />
  </div>
  <HelloWorld msg="hello vue3 vite" />
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import { ref } from 'vue';
  const input = ref('');
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    color: #000;
    display: flex;
    align-items: center;
  }
</style>
