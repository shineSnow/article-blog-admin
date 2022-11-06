<template>
  <div class="layout">
    <el-container>
      <el-aside :width="collapse ? 'fit-content' : '200px'">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <div class="menu-tab-section">
          <MenuTab></MenuTab>
        </div>
        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import Menu from './menu/menu.vue';
  import Header from './header.vue';
  import MenuTab from './menuTab.vue';
  import { useMenuStore } from '@/store/menu';
  import { storeToRefs } from 'pinia';
  const menuStore = useMenuStore();
  const { collapse } = storeToRefs(menuStore);
</script>

<style lang="scss" scoped>
  .layout {
    position: relative;
    display: flex;
    align-items: stretch;
    height: 100vh;
    .el-header {
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    }
    .el-main {
      background-color: #f5f7f9;
    }
  }
</style>
