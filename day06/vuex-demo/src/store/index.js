import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/User'
import setting from './modules/Setting'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    title: '仓库大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: {
    // 第一个参数是 state，第二个参数是传来的参数
    addCount (state) {
      state.count += 1
    },
    addFive (state, n) {
      state.count += n
    },
    changeTitle (state, obj) {
      state.title = obj.newTitle
    },
    myBinding (state, newCount) {
      state.count = newCount
    }
  },
  actions: {
    // context 理解为 store
    changeCountAction (context, num) {
      // 异步操作
      setTimeout(() => {
        context.commit('addFive', num)
      }, 1000)
    }
  },
  getters: {
    // 第一个参数是 state
    filterList (state) {
      return state.list.filter(iter => iter > 5)
    }
  },
  modules: {
    user,
    setting
  }
})

// 导出
export default store
