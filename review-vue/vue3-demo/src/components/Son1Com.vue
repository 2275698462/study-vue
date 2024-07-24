<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div>
    我是Son1.vue -- {{ counterStore.count }}
    <button @click="counterStore.addCount()">+</button>
  </div>
</template>

<style scoped></style>
