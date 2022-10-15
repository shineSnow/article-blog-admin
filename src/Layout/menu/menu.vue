<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="collapse"
  >
    <div class="logo-section">{{ collapse ? 'logo' : '中策管理后台' }}</div>
    <MenuItem v-for="(route, index) in permissions" :item="route" :index="index"></MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
  import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
  import { storeToRefs } from 'pinia';
  import { useMenuStore } from '@/store/menu';
  import MenuItem from './menu-item.vue';

  const menuStore = useMenuStore();
  const { collapse, permissions } = storeToRefs(menuStore);

  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
</script>
<style lang="scss" scoped>
  .logo-section {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #545c64;
    color: #fff;
    transition: all 0.3s;
    white-space: nowrap;
  }
  .el-menu-vertical {
    height: 100%;
  }
</style>
