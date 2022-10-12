<template>
  <div class="tab-section">
    <el-tabs v-model="editableTabsValue" type="card" class="router-tabs" closable @tab-remove="removeTab">
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name"> </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  let tabIndex = 2;
  const editableTabsValue = ref('2');
  const editableTabs = ref([
    {
      title: '首页',
      name: '1'
    },
    {
      title: 'Tab 2',
      name: '2'
    }
  ]);

  const addTab = (targetName: string) => {
    const newTabName = `${++tabIndex}`;
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content'
    });
    editableTabsValue.value = newTabName;
  };
  const removeTab = (targetName: string) => {
    const tabs = editableTabs.value;
    let activeName = editableTabsValue.value;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }

    editableTabsValue.value = activeName;
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
  };
</script>
<style lang="scss" scoped>
  .tab-section {
    height: 46px;
    overflow: hidden;
    .router-tabs > .el-tabs__content {
      padding: 32px;
      color: #6b778c;
      font-size: 32px;
    }
  }
</style>
