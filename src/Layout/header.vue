<template>
  <div class="header-section">
    <div class="header-left">
      <el-icon size="22px" @click="navToggle">
        <Fold v-if="true" />
        <Expand v-else />
      </el-icon>
    </div>
    <div class="header-content">
      <p>欢迎您，管理员</p>
    </div>
    <div class="header-right">
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <span>13185226548</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Fold, Expand, ArrowDown } from '@element-plus/icons-vue';
  import { mainStore } from '@/store/index';
  import { useMenuStore } from '@/store/menu';
  import { storeToRefs } from 'pinia';

  const menuStore = useMenuStore();

  function navToggle() {
    menuStore.toggleMenu();
  }
</script>

<style lang="scss" scoped>
  .header-section {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: 100%;
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header-left {
      flex-shrink: 0;
      margin-right: 20px;
    }

    .header-content {
      flex: 1;
    }
    .header-right {
      .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
      }
    }
  }
</style>
