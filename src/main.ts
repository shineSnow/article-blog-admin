import { createApp } from 'vue';
import './style.css';
import 'tailwindcss/tailwind.css';
import App from './App.vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { initGlobalComponent } from '@/components/globalComponents';

import { createPinia } from 'pinia';

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 创建 Pinia 实例
const pinia = createPinia();

const app = createApp(App);
app.use(router).use(pinia).use(ElementPlus).mount('#app');

console.log('main.ts:app', app);

initGlobalComponent(app);
