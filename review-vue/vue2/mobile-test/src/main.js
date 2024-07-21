import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from '@/router'
import '@/utils/vant-ui'
import '@/sytle/common.less'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
