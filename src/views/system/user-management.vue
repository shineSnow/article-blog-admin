<template>
  <div class="user-page">
    <TableForm :searchList="searchList" :tableInfo="tableInfo" api="/system/user/list"></TableForm>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const searchList = reactive([
    {
      label: '用户名',
      key: 'userName'
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
        label: 'ID',
        prop: 'id'
      },
      {
        label: '用户名',
        prop: 'userName'
      },
      {
        label: '邮件',
        prop: 'email'
      },
      {
        label: '性别',
        prop: 'sex'
      },
      {
        label: '角色',
        render: (h: (arg0: string, arg1: {}, arg2: string) => any, p: any) => {
          return h('div', { id: 'foo' }, `${p.row.role.roleCode}:${p.row.role.roleName}`);
        }
      },
      {
        label: '操作',
        render: (h: (arg0: string, arg1: {}, arg2?: string | Array<any>) => any, p: any) => {
          return h('div', {}, [
            h('Button', {
              props: {
                type: 'primary'
              }
            })
          ]);
        }
      }
    ]
  });
</script>

<style scoped lang="scss">
  .user-page {
    border: 1px soldi red;
  }
</style>
