import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetInfoService } from '@/api/user'

// 用户模块 token setToken removeToken
export const useUserStore = defineStore(
  'big-user',
  () => {
    // token 相关
    const token = ref('')

    const setToken = (newToken) => {
      token.value = newToken
    }

    const removeToken = () => {
      token.value = ''
    }

    // ==================================

    // 用户信息相关
    const user = ref({})

    const getUser = async () => {
      const res = await userGetInfoService() // api 获取数据
      user.value = res.data.data
    }

    const setUser = (newUeser) => {
      user.value = newUeser
    }

    return {
      token,
      setToken,
      removeToken,
      getUser,
      user,
      setUser
    }
  },
  {
    persist: true
  }
)
