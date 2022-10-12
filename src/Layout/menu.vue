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

    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>header中参数 {{ count }}</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
  import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
  import { storeToRefs } from 'pinia';
  import { useMenuStore } from '@/store/menu';

  const menuStore = useMenuStore();
  const { collapse } = storeToRefs(menuStore);

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
