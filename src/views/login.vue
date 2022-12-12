<template>
  <div class="login_page flex justify-center bg-login-page-mount">
    <div class="login-section">
      <div class="system-title text-white">中策管理系统</div>
      <div class="form-section">
        <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="login-form" :size="formSize" status-icon>
          <el-form-item label="账号：" prop="username">
            <el-input v-model="loginForm.username" :prefix-icon="User" placeholder="用户名" maxlength="20" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="loginForm.password" type="password" :prefix-icon="Lock" placeholder="密码" />
          </el-form-item>
        </el-form>
        <div class="bot-section">
          <el-button type="primary" size="large" class="w-80 submitBtn" @click="submitForm(loginFormRef)"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { User, Lock } from '@element-plus/icons-vue';
  import { login } from '@/api/user';
  import { ref, reactive } from 'vue';
  import type { FormInstance, FormRules } from 'element-plus';
  import { ElMessage } from 'element-plus';
  import { useRouter } from 'vue-router';
  import { useMenuStore } from '@/store/menu';
  import { wsCache } from '@/utils/web-storage-cache';

  const router = useRouter();

  const loginFormRef = ref<FormInstance>();

  const formSize = ref('large');

  const loginForm = reactive({ username: '', password: '' });

  const menuStore = useMenuStore();

  const rules = reactive<FormRules>({
    username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
    password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
  });

  /**
   * 登录
   */
  const submitForm = async (formEl: FormInstance) => {
    await formEl.validate(async (valid, fields) => {
      if (valid) {
        try {
          const data = await login(loginForm);
          wsCache.set('token', data);
          router.push({ path: '/' });
          ElMessage.success('登录成功！');
          menuStore.fetchUserInfo();
        } catch (error) {}
      }
    });
  };
</script>

<style scoped lang="scss">
  .login_page {
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 160px;
    .login-section {
      text-align: center;
      .system-title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 80px;
      }
      .form-section {
        color: #fff;
        .login-form {
          width: 400px;
        }
        .bot-section {
          text-align: right;
          .submitBtn {
            width: 346px;
          }
        }
      }
    }
  }
</style>
<style>
  .login-form .el-form-item__label {
    color: #fff !important;
  }
</style>
