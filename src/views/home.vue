<template>
  <div class="home">
    <h6>首页</h6>
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
    background-color: #fff;
  }
</style>
