<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是父组件
    <!-- 1.给组件标签添加自定义属性 -->
    <Son :toSon="myTitle" @FatherFn="handleChange"></Son>

  </div>
</template>

<script>
import Son from './ASon.vue'

export default {
  data() {
    return {
      myTitle: '我是校花',
    }
  },
  methods: {
    handleChange(a) {
      this.myTitle = a
    }
  },
  components: {
    Son,
  },
}
</script>
