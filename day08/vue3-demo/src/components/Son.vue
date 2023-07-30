<script setup>
const props = defineProps({
  money: Number
})

// 1.先定义事件
const emit = defineEmits(['changeMoney'])

const buy = () => {
  // 2.再触发
  emit('changeMoney', 5)
}

</script>

<template>
  <div class="son">
    子组件 - {{ money }}
    <button @click="buy">花钱</button>
  </div>
</template>

<style scoped>
.son {
  border: 1px solid #000;
  padding: 30px;
}
</style>