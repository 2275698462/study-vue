import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

/*
import { useUserStore } from '@/stores/modules/user'
import { useCountStore } from '@/stores/modules/count'
export { useCountStore, useUserStore }
*/

// 简写（引入后再导出，中转站）
export * from './modules/count'
export * from './modules/user'
