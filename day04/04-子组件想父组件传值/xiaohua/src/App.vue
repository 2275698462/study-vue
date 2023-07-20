<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <!-- 2.父组件对子组件的消息进行监听 -->
    <Son :title="myTitle" @changTitle="handleChange"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue'
export default {
  name: 'App',
  data() {
    return {
      myTitle: '程序员校花',
    }
  },
  components: {
    Son,
  },
  methods: {
    // 3.提供处理函数，提供逻辑
    handleChange(newTitle) {
      console.log(newTitle) // 校花好美
      this.myTitle = newTitle
    },
  },
}
</script>

<style>
</style>