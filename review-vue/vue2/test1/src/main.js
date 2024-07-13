import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 注册全局指令
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
