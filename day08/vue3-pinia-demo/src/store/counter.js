import {defineStore} from "pinia";
import {computed, ref} from "vue";

// 定义 store
// defineStore(仓库的唯一标识， () => {...})
export const useCounterStore = defineStore('counter', () => {
        // 声明数据 state - count
        const count = ref(0)

        // 声明操作数据的方法 function
        const addCount = () => count.value++
        const subCount = () => count.value--

        // 声明基基于数据的计算属性 getters（computed）
        const double = computed(() => count.value * 2)

        // 声明数据 state - meg
        const meg = ref('hello pinia')

        return {
            count,
            meg,
            addCount,
            subCount,
            double
        }
    },
    {
        persist: true,
    })