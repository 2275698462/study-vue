import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('focus', {
    // 指令所在的 dom 元素被插入到页面时触发
    inserted(el) {
        el.focus()
    }
})

new Vue({
    render: h => h(App),
}).$mount('#app')
