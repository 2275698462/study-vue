<template>
  <div class="App">
    <!--头部组件-->
    <AHeaderName></AHeaderName>
    <!--主体组件-->
    <AMain></AMain>
    <!--底部组件-->
    <AFooter></AFooter>
  </div>
</template>


<script>
// 导入组件对象（对象名可以自定义）
import AHeader from './components/AHeader.vue'
import AMain from './components/AMain.vue'
import AFooter from './components/AFooter.vue'

export default {
  components: {
    // 组件名: 组件对象（组件名也可以自定义）
    AHeaderName: AHeader,
    AMain: AMain,
    // 简写
    AFooter
  }
}
</script>

<style>
.App {
  width: 600px;
  height: 700px;
  background-color: skyblue;
  margin: 0 auto;
  padding: 20px;
}

</style>
