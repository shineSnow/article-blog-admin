<template>
  <div class="header-section">
    <div class="header-left">
      <el-icon size="22px" @click="navToggle">
        <Fold v-if="true" />
        <Expand v-else />
      </el-icon>
    </div>
    <div class="header-content">header-content store中的數據count:{{ count }}</div>
    <div class="header-right">header-right</div>
  </div>
</template>

<script setup lang="ts">
  import { Fold, Expand } from '@element-plus/icons-vue';
  import { mainStore } from '@/store/index';
  import { storeToRefs } from 'pinia';

  const mainStoreI = mainStore();
  const { count, foo, age } = storeToRefs(mainStoreI);

  function navToggle() {
    count.value++;
  }
</script>

<style lang="scss" scoped>
  .header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
</style>
