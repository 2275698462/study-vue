import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    updateCartList (state, newList) {
      state.cartList = newList
    },
    mUpdateCount (state, obj) {
      const good = state.cartList.find(item => item.id === obj.id)
      good.count = obj.count
    }
  },
  actions: {
    async getCartList (ac) {
      const { data } = await axios('http://localhost:3000/cart')
      ac.commit('updateCartList', data)
    },
    async updateCount (ac, obj) {
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.count
      })
      ac.commit('mUpdateCount', obj)
    }
  },
  getters: {
    total (state) {
      return state.cartList.reduce((a, item) => a + item.count, 0)
    },
    totalPrice (state) {
      return state.cartList.reduce((a, item) => a + item.price * item.count, 0)
    }
  }
}
