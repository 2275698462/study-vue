<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @delTodo="del"></TodoMain>
    <TodoFooter :total="list.length" @clear="cle"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoMain from "@/components/TodoMain.vue";
import TodoFooter from "@/components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data() {
    return {
      list: [
        {id: 1, name: '打篮球'},
        {id: 2, name: '看电影'},
        {id: 3, name: '逛街'}
      ]
    }
  },
  methods: {
    handleAdd(todoName) {
      this.list.unshift(
          {
            id: +new Date(),
            name: todoName
          }
      )
    },
    del(id) {
      this.list = this.list.filter(
          i => i.id !== id
      )
    },
    cle() {
      this.list = []
    }
  }
}
</script>

<style>

</style>
