<script>
export default {
  data() {
    return {
      isEdit: false,
    }
  },
  methods: {
    handleDbClick() {
      this.isEdit = !this.isEdit
      this.$nextTick(() => {
        this.$refs.inp.focus()
      })
    }
  }
}

</script>

<template>
  <div class="my-tag">
    <input
        v-if="isEdit"
        ref="inp"
        class="input"
        type="text"
        placeholder="输入标签"
    />
    <div
        class="text"
        v-else
        @dblclick="handleDbClick"
    >
      男靴
    </div>
  </div>
</template>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;

  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;

    &::placeholder {
      color: #666;
    }
  }
}
</style>