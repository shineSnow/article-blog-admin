<template>
  <div class="login-page flex justify-center items-center">
    <el-card class="login-card">
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .login-page {
    height: 100vh;
    .login-card {
      width: 600px;
      height: 320px;
    }
  }
</style>
