<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<template>
  <div>
    我是 Layout
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#ee0a24">
      <van-tabbar-item to="home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="category" icon="apps-o">分类页</van-tabbar-item>
      <van-tabbar-item to="cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>
