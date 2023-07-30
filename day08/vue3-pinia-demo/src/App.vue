<script setup>
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'
import {useCounterStore} from "@/store/counter";
import {useChannelStore} from "@/store/channel";
import {storeToRefs} from "pinia";

const counterStore = useCounterStore()
const channelStore = useChannelStore()

const {count, meg} = storeToRefs(counterStore)

console.log(counterStore)
</script>

<template>
  <div>
    <h3>
      根组件
      - {{ count }}
      - {{ meg }}
    </h3>
    <Son1></Son1>
    <Son2></Son2>
    <hr>
    <button @click="channelStore.getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
