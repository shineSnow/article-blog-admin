import Axios, { AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { wsCache } from './web-storage-cache';

const baseURL = 'http://localhost:4000/api';

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
});

// 前置拦截器（发起请求之前的拦截）

axios.interceptors.request.use(
  (config: any) => {
    console.log('request', config);
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
    if (response.data) {
      const { code, data, msg } = response.data;

      if (code !== 200) {
        ElMessage.error(` Message: ${msg}`);
        console.error(`[Axios Error]`, data);
        return Promise.reject({ status: code, message: msg });
      }
    }
    return response.data;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      ElMessage.error(`Code: ${code}, Message: ${msg}`);
      console.error(`[Axios Error]`, error.response);
    } else {
      ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
  }
);

export default axios;
