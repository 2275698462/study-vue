<template>
  <div class="son" style="border: 3px solid #000; margin: 10px">
    我是Son组件 {{ title }}
    <button @click="changeFn">修改title</button>
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  props: ['title'],
  methods: {
    changeFn() {
      // 通过 this.$emit() 向父组件发送通知
      this.$emit('changTitle','校花好美')
    },
  },
}

</script>

<style>
</style>