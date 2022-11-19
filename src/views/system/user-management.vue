<template>
  <div class="user-page">
    <TableForm :searchList="searchList" :tableInfo="tableInfo"></TableForm>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const searchList = reactive([
    {
      label: '用户名',
      key: 'username'
    },
    {
      label: 'level',
      key: 'level',
      type: 'select',
      options: [
        {
          label: 'first',
          value: 1
        }
      ]
    }
  ]);
  const tableInfo = reactive({
    columnList: [
      {
        label: 'id',
        prop: 'id'
      },
      {
        label: 'name',
        prop: 'name'
      },
      {
        label: 'level',
        prop: 'level'
      },
      {
        label: 'action',
        render: (h: (arg0: string, arg1: {}, arg2: string) => any, p: any) => {
          return h('div', { id: 'foo' }, 'hello');
        }
      }
    ],
    dataList: [
      {
        id: 1111,
        name: 'name',
        level: '111'
      }
    ]
  });
</script>

<style scoped lang="scss">
  .user-page {
    border: 1px soldi red;
    height: 9000px;
  }
</style>
