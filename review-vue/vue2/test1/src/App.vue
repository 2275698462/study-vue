<script>
import AHeader from './components/AHeader.vue'
import AMain from './components/AMain.vue'
import AFoot from './components/AFoot.vue'
import AFather from './components/AFather.vue'

export default {
  components: {
    AHeader: AHeader,
    AMain: AMain,
    AFoot: AFoot,
    Father: AFather,
  }
}

</script>

<template>
  <div id="app">
    <AHeader></AHeader>
    <AMain></AMain>
    <AFoot></AFoot>

    <Father></Father>
  </div>
</template>



<style>

</style>
