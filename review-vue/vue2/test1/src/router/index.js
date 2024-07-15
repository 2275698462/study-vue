import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import Like from "@/views/Like.vue";
import Article from "@/views/Article.vue";
import Collect from "@/views/Collect.vue";
import User from "@/views/User.vue";


Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/article',
            children: [
                {path: '/article', component: Article},
                {path: '/like', component: Like},
                {path: '/collect', component: Collect},
                {path: '/user', component: User},
            ]
        },
        {
            path: '/detail/:id?', component: ArticleDetail
        }
    ]
})

export default router