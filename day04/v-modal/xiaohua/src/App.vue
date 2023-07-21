<template>
  <div class="app">
    <button @click="openDialog">退出按钮</button>
    <!-- :visible.sync  === :visible="isShow" + @update:visible="isShow=$event" -->
    <BaseDialog :visible.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from './components/BaseDialog.vue'

export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    openDialog() {
      this.isShow = true
    },
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>