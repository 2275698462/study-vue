<template>
  <div>
    <!--  二级路由出口 -->
    <router-view></router-view>

    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item to="/home" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" name="search" icon="apps-o">分类页</van-tabbar-item>
      <van-tabbar-item to="/cart" name="friends" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" name="setting" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style scoped>

</style>
