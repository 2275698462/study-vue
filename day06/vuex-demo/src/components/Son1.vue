<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <br>
    <button @click="handleAdd">值 + 1</button>
    <button @click="handleFive">值 + 5</button>
    <button @click="handleChange">一秒后修改为666</button>
    <button @click="changeFn">改标题</button>

    <hr>
    <div>{{$store.state.list}}</div>
    <div>{{$store.getters.filterList}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    handleAdd () {
      this.$store.commit('addCount')
    },
    handleFive () {
      this.$store.commit('addFive', 5)
    },
    changeFn () {
      this.$store.commit('changeTitle', {
        newTitle: '新标题'
      })
    },
    handleChange () {
      // 调用 action
      this.$store.dispatch('changeCountAction', 666)
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}

h2 {
  margin-top: 10px;
}
</style>
