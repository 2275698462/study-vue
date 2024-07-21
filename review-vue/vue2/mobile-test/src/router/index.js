import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Search from '@/views/search/index.vue'
import List from '@/views/search/list.vue'
import Pay from '@/views/pay/index.vue'
import ProDetail from '@/views/prodetail/index.vue'
import MyOrder from '@/views/myorder/index.vue'

import Home from '@/views/layout/home.vue'
import User from '@/views/layout/user.vue'
import Cart from '@/views/layout/cart.vue'
import Category from '@/views/layout/category.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/', redirect: '/layout/home'
    },
    {
      path: '/layout',
      component: Layout,
      children: [
        { path: 'home', component: Home },
        { path: 'category', component: Category },
        { path: 'cart', component: Cart },
        { path: 'user', component: User }
      ]
    },

    {
      path: '/login', component: Login
    },

    {
      path: '/search', component: Search
    },
    {
      path: '/searchList', component: List
    },
    {
      path: '/pay', component: Pay
    },
    {
      path: '/proDetail', component: ProDetail
    },
    {
      path: '/myOrder', component: MyOrder
    }
  ]
})

export default router
