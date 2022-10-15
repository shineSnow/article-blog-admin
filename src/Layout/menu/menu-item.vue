<template>
  <el-sub-menu :index="`${index}`" v-if="item.children.length">
    <template #title>
      <el-icon><location /></el-icon>
      <span>{{ item.menuTitle }}</span>
    </template>
    <template v-for="(childRoute, childIndex) in item.children">
      <router-link :to="childRoute.menuPath">
        <el-menu-item :item="childRoute" :index="`${index}-${childIndex}`">{{ childRoute.menuTitle }}</el-menu-item>
      </router-link>
    </template>
    <!-- <menu-item v-for="(childRoute, childIndex) in item.children" :item="childRoute" :index="childIndex"></menu-item> -->
  </el-sub-menu>

  <router-link :to="item.menuPath" v-else>
    <el-menu-item :index="`${index}`">
      <el-icon><setting /></el-icon>
      <template #title>{{ item.menuTitle }}</template>
    </el-menu-item>
  </router-link>
</template>

<script setup lang="ts">
  import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
  const props = defineProps(['item', 'index']);
</script>

<style scoped lang="scss"></style>
