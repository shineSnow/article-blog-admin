import { createApp } from 'vue';
import './style.css';
import 'tailwindcss/tailwind.css';
import App from './App.vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { createPinia } from 'pinia';

// 创建 Pinia 实例
const pinia = createPinia();

createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app');
