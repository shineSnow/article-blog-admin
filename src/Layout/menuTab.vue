<template>
  <div class="menu-tag flex items-center">
    <div class="left">
      <el-icon><ArrowLeft /></el-icon>
    </div>
    <div class="center">
      <el-scrollbar>
        <div class="scrollbar-flex-content">
          <router-link v-for="(item, index) in menuTags" :to="item.fullPath" :key="item.fullPath">
            <p :class="['scrollbar-item', route.fullPath == item.fullPath ? 'active' : '']">
              {{ item.title }}
            </p>
          </router-link>
        </div>
      </el-scrollbar>
    </div>
    <div class="right">
      <el-icon><ArrowRight /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
  import { useRoute } from 'vue-router';
  import { useMenuStore } from '@/store/menu';
  import { storeToRefs } from 'pinia';
  import { watch, ref } from 'vue';
  const route = useRoute();
  const menuStore = useMenuStore();
  const { menuTags } = storeToRefs(menuStore);
  watch(route, async (newRoute) => {
    console.log(newRoute);
    menuStore.addMenuTag(newRoute);
  });
</script>

<style lang="scss" scoped>
  .menu-tag {
    .left {
      padding: 0 3px;
    }
    .center {
      flex: 1;
    }
    .right {
      padding: 0 3px;
    }
    .scrollbar-flex-content {
      display: flex;
    }

    .scrollbar-item {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100px;
      height: 36px;
      margin: 10px;
      text-align: center;
      border-radius: 4px;
      background: var(--el-color-primary-light-9);
      color: #666;
    }
    .active {
      color: var(--el-color-primary);
    }
  }
</style>
