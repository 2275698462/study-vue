<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input type="text">
      <button >搜索一下</button>
    </div>
    <div class="hot-link">

    </div>
  </div>
</template>

<script>
export default {
  name: 'FindMusic',

}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('D:/Study/前端/黑马Vue/01-随堂代码&素材/day06/code/13-编程式导航-跳转传参演示/assets/logo.jpeg') no-repeat center;
}

.search-box {
  display: flex;
  justify-content: center;
}

.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.search-box input:focus {
  border: 2px solid #ad2a26;
}

.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}

.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}

.hot-link a {
  margin: 0 5px;
}
</style>