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
      <el-table :data="dataList" border style="width: 100%">
        <template v-for="columnItem in tableInfo.columnList">
          <el-table-column
            v-if="columnItem.render"
            :fixed="columnItem.fixed"
            :prop="columnItem.prop"
            :label="columnItem.label"
            :width="columnItem.width ? columnItem.width : null"
          >
            <template #default="scope">
              <Expand :row="scope" :renderFn="columnItem.render"></Expand>
            </template>
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

    <div class="pagenation-section">
      <el-pagination
        v-model:current-page="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :page-sizes="[100, 200, 300, 400]"
        :small="false"
        :disabled="false"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Expand from './expand';
  import { h, onMounted, reactive, ref } from 'vue';
  import {
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElButton,
    ElPagination,
    ElTable,
    ElTableColumn
  } from 'element-plus';
  import type { FormInstance } from 'element-plus';
  import request from '../../utils/request';
  const renderFn = ref(h);
  const searchFormRef = ref<FormInstance>();
  const props = defineProps({
    // 搜索类表
    searchList: {
      type: Array,
      default: () => []
    },
    // 表格列名
    tableInfo: {
      type: Object,
      default() {
        return {
          columnList: [],
          dataList: []
        };
      }
    },
    // 搜索查询列表接口
    api: {
      type: String,
      default: ''
    },
    // 处理api接口返回的数据
    transformRespFn: {
      type: Function,
      default: null
    }
  });

  onMounted(() => {
    iniApi();
  });

  let dataList = ref([]);

  // 搜索参数
  let serchParams: any = reactive({});

  // 查询
  function onSearch() {
    console.log('查询', serchParams);
    iniApi();
  }
  // 重置
  function onReset(formEl: FormInstance) {
    formEl.resetFields();
    iniApi();
  }
  // 当前页
  let pagination = reactive({
    currentPage: 1,
    pageSize: 10,
    total: 0
  });
  // 每页显示条数变化
  function handleSizeChange(size: number) {
    pagination.pageSize = size;
    iniApi();
  }
  // 当前页发生变化
  function handleCurrentChange(page: number) {
    pagination.currentPage = page;
    iniApi();
  }

  // 初始化接口请求
  async function iniApi() {
    let params = {
      current: pagination.currentPage,
      size: pagination.pageSize,
      ...serchParams
    };
    console.log('搜索参数：', params);

    let resp: any = await request.get(props.api, { params });
    console.log('resp', resp);

    let { current, size, list, total } = resp;
    if (props.transformRespFn) list = props.transformRespFn(list);

    pagination.currentPage = current;
    pagination.pageSize = size;
    pagination.total = total;
    dataList.value = list;
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
    .pagenation-section {
      display: flex;
      justify-content: flex-end;
      padding: 16px 12px;
    }
  }
</style>
