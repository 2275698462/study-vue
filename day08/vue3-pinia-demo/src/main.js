import { createApp } from 'vue'
import {createPinia} from "pinia";
import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'

// 创建 Pinia 实例
const pinia = createPinia()
pinia.use(persist)

createApp(App).use(pinia).mount('#app')
