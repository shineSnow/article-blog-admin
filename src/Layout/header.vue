<template>
  <div class="header-section">
    <div class="header-left">
      <el-icon size="22px" @click="navToggle">
        <Fold v-if="isExpand" />
        <Expand v-else />
      </el-icon>
    </div>
    <div class="header-content">header-content {{ isExpand }}</div>
    <div class="header-right">header-right</div>
  </div>
</template>

<script setup lang="ts">
  import { Fold, Expand } from '@element-plus/icons-vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  const isExpand = computed(() => {
    console.log(store.state);

    return store.state.layout.isMenuExpand;
  });

  function navToggle() {
    store.commit('layout/toggleMenu');
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
