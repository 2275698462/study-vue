<template>
  <div class="my-tag">
    <input
        v-focus
        v-if="isEdit"
        class="input"
        type="text"
        placeholder="输入标签"
        @blur="isEdit = false"

        :value="value"
        @keyup.enter="changeTag"
    />
    <div
        v-else
        class="text"
        @dblclick="handleClick"
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      isEdit: false,
    }
  },
  methods: {
    handleClick() {
      this.isEdit = true

      // 等 dom 更新完了再获取焦点
      // this.$nextTick(() => {
      //   this.$refs.inp.focus()
      // })
    },
    changeTag(e) {
      if (e.target.value.trim() === '') {
        alert('标签不能为空')
        return
      }
      this.$emit('input', e.target.value)
      this.isEdit = false
    }
  }
}
</script>


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