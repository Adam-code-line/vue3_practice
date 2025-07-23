//引入 Vue 3 和 App 组件
import { createApp } from 'vue';
import App from './App.vue';

//引入pinia
import { createPinia } from 'pinia';

//引入路由器
import router from './router';

import emitter from './utils/emitter';


//创建pinia
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
