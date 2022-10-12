<template>
  <div class="layout">
    <el-container>
      <el-aside :width="collapse ? 'fit-content' : '200px'">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <div
          class="menu-tab-section"
          :style="{ left: collapse ? '64px' : '', width: collapse ? 'calc(100% -64px)' : '' }"
        >
          <MenuTab></MenuTab>
        </div>
        <el-main>
          <slot></slot>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import Menu from './menu.vue';
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
      padding-top: 60px;
      background-color: #f5f7f9;
    }
    .menu-tab-section {
      position: fixed;
      width: calc(100% - 200px);
      z-index: 3;
      top: 60px;
      padding-top: 6px;
      left: 200px;
      background-color: #f5f7f9;
      transition: all 0.3s ease-in-out;
    }
  }
</style>
