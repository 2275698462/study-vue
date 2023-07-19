// 核心作用：导入 App.vue，基于 App.vue 创建结构渲染 index.html

// 1.导入 Vue 核心包
import Vue from 'vue'

// 2.导入 App.vue 根组件
import App from './App.vue'
import AButton from './components/AButton.vue'

Vue.config.productionTip = false

// 全局注册
Vue.component('AButton', AButton)

// 3.Vue 实例化，提供 render 方法：基于 App.vue 创建 index.html
new Vue({
  // el: '#app',
  // render: h => h(App),
  render: (createElement) => {
    // 基于 App 创建元素结构
    return createElement(App)
  }
}).$mount('#app')
// .$mount('#app') 和 el: '#app' 作用一样