<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <!-- 3.直接使用 props 的值 -->
    我是Son组件 {{ toSon }}
    <button @click="changeFn">修改 toSon</button>
  </div>
</template>

<script>
export default {
  // 2.通过 props 来接受
  props: ['toSon'],
  methods: {
    changeFn() {
      this.$emit('FatherFn', '校花好美')
    }
  }
}
</script>
