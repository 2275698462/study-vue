<script setup>
import {useCounterStore} from "@/store/counter";

const counterStore = useCounterStore()
console.log(counterStore.meg) // hello pinia
</script>

<template>
  <div>
    Son1 - {{ counterStore.count }} - {{ counterStore.double}}
    <button @click='counterStore.addCount'>+</button>
  </div>
</template>
<style scoped>

</style>