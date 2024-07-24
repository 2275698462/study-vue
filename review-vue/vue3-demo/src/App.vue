<script setup>
import Son1Com from '@/components/Son1Com.vue'
import Son2Com from '@/components/Son2Com.vue'

import { useCounterStore } from '@/stores/counter'
import { useChannelStore } from '@/stores/channel.js'

const counterStore = useCounterStore()
const channelStore = useChannelStore()
</script>

<template>
  <div>
    <h3>App.vue根组件 - {{ counterStore.count }} - {{ counterStore.msg }}</h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>

    <hr />
    <button @click="channelStore.getList()">获取频道数据</button>
    {{ channelStore.channelList }}
  </div>
</template>

<style scoped></style>
