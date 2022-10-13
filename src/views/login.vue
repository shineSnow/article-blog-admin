<template>
  <div class="login_page flex justify-center items-center bg-login-page">
    <el-card class="login-card"> </el-card>
  </div>
</template>
<script setup lang="ts">
  import { fetchPageBg } from '@/api/comment';
  import pageBgImg from '@/assets/page-bg.jpg';
  import { ref, reactive } from 'vue';

  const bgStyle = reactive({
    backgroundImg: 'http://img.xjh.me/img/59248358_p0.jpg'
  });

  const bgImgSrc = ref('http://img.xjh.me/img/59248358_p0.jpg');
</script>

<style scoped lang="scss">
  .login_page {
    height: 100vh;
    background-size: cover;
    .login-card {
      width: 600px;
      height: 320px;
    }
  }
</style>
