<template>
  <div class="home">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
    </el-row>
    <el-input v-model="input" placeholder="Please inpuaat" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const input = ref('');
</script>

<style lang="scss" scoped>
  .home {
    height: 900px;
    color: #000;
    border: 1px solid red;
  }
</style>
