<script setup>
import Test from "@/components/Test.vue";
import {onMounted, ref} from "vue";

// 模板引用（获取 dom 或者 组件）
const inp = ref(null)

onMounted(() => {
  // 渲染完 dom
  console.log(inp.value) // 输入框 dom
  inp.value.focus()
})

// 点击获取焦点
const clickFn = () => {
  inp.value.focus()
}

// -------------------------------------

// 获取组件
const test = ref(null)

const getCom = () => {
  console.log(test.value.count) // 666
}
</script>

<template>
  <div>
    <input ref="inp" type="text">
    <button @click="clickFn">点击让输入框聚焦</button>
  </div>
  <Test ref="test"></Test>
  <button @click="getCom">获取组件</button>
</template>