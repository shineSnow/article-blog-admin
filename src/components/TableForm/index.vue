<template>
  <div class="table-form-component">
    <div class="serach-section">
      <el-form :inline="true" :model="serchParams" class="demo-form-inline" ref="searchFormRef">
        <template v-for="searchItem in searchList">
          <el-form-item :label="`${searchItem.label}：`" v-if="!searchItem.type" :prop="searchItem.key">
            <el-input v-model="serchParams[searchItem.key]" placeholder="请输入" />
          </el-form-item>

          <el-form-item :label="`${searchItem.label}：`" v-if="searchItem.type === 'select'" :prop="searchItem.key">
            <el-select v-model="serchParams[searchItem.key]" placeholder="请选择">
              <el-option :label="opts.label" value="opts.value" v-for="opts in searchItem.options" />
            </el-select>
          </el-form-item>
        </template>

        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
          <el-button @click="onReset(searchFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-section">
      <el-table :data="tableInfo.dataList" style="width: 100%" height="250">
        <template v-for="columnItem in tableInfo.columnList">
          <el-table-column
            v-if="columnItem.render"
            :fixed="columnItem.fixed"
            :prop="columnItem.prop"
            :label="columnItem.label"
            :width="columnItem.width ? columnItem.width : null"
          >
            <template #default="scope"> {{ renderFn('div', { id: 'foo' }, 'hello') }} </template>
          </el-table-column>
          <el-table-column
            v-else
            :fixed="columnItem.fixed"
            :prop="columnItem.prop"
            :label="columnItem.label"
            :width="columnItem.width ? columnItem.width : null"
          />
        </template>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { h } from 'vue';

  import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton } from 'element-plus';
  import type { FormInstance } from 'element-plus';
  import { reactive, ref } from 'vue';
  const renderFn = ref(h);
  const searchFormRef = ref<FormInstance>();
  const props = defineProps({
    searchList: {
      type: Array,
      default: () => []
    },
    tableInfo: {
      type: Object,
      default() {
        return {
          columnList: [],
          dataList: []
        };
      }
    }
  });
  console.log('tableInfo', props.tableInfo);

  // 搜索参数
  let serchParams: any = reactive({});

  // 查询
  function onSearch() {
    console.log('查询', serchParams);
  }
  // 重置
  function onReset(formEl: FormInstance) {
    formEl.resetFields();
  }
</script>

<style scoped lang="scss">
  .table-form-component {
    .serach-section {
      padding: 12px;
      background-color: #fff;
      border-radius: 8px;
      margin-bottom: 30px;
    }
    .table-section {
    }
  }
</style>
