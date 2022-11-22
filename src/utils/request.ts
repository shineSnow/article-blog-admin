import Axios, { AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import router from '@/router';
import { wsCache } from './web-storage-cache';

const baseURL = 'http://localhost:4000/api';

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
});

// 前置拦截器（发起请求之前的拦截）

axios.interceptors.request.use(
  (config: any) => {
    let token = wsCache.get('token');

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: token
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    console.log('API RESPONSE', response);

    const { code, data, msg } = response.data;

    if (code == 200) {
      return data;
    } else {
      if (code == 401) {
        console.log('router', router);

        router.push({ path: '/login' });
      }
      ElMessage.error(`Code: ${code}, Message: ${msg}`);
    }
  },
  (error) => {
    console.error(`[Axios Error11111]`, error);
    // if (error.response && error.response.data) {
    //   const code = error.response.status;
    //   const msg = error.response.data.message;
    //   ElMessage.error(`Code: ${code}, Message: ${msg}`);
    // } else {
    //   ElMessage.error(`${error}`);
    // }
    return Promise.reject(error);
  }
);

export default axios;
