import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

Vue.config.productionTip = false

// 注册全局指令
Vue.directive('focus', {
    inserted(el) {
        el.focus()
    }
})

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')
