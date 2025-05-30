import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n'; 
import en from './locales/en.json';
import zhCn from './locales/zh-cn.json';
import zhTw from './locales/zh-tw.json';
import es from './locales/es.json';
import mitt from 'mitt';
import { createTerminal } from 'vue-web-terminal';

// 创建国际化实例
const i18n = createI18n({
  locale: 'zh1', // 设置默认语言，注意这里的键应该是字符串
  messages: {
    en,
    'zh1': zhCn,
    'zh2': zhTw,
    es
  }
});
const eventBus = mitt();
const app = createApp(App);

app.use(router);
app.use(i18n);

app.use(createTerminal());
app.provide('eventBus', eventBus);
// 挂载应用
app.mount('#app');