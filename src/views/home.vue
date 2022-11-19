<template>
  <div class="home">
    <h6>首页</h6>
    <TableForm></TableForm>
    <HomeWrapper>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </HomeWrapper>
  </div>
</template>

<script setup lang="ts">
  import HomeWrapper from './homewrapper.vue';
</script>

<style lang="scss" scoped>
  .home {
    height: 900px;
    color: #000;
    background-color: #fff;
  }
</style>
