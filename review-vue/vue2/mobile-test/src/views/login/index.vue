<script>
import { getPhoneCode, getPicCode } from '@/api/login'

export default {
  name: 'LoginIndex',
  data () {
    return {
      picUrl: '',
      totalSecond: 60,
      second: 60,
      timerId: null,
      phone: '',
      code: ''
    }
  },
  methods: {
    async getPicCode1 () {
      const { data: { base64 } } = await getPicCode()
      this.picUrl = base64
    },
    getCode () {
      if (this.timerId === null && this.second === this.totalSecond) {
        this.timerId = setInterval(async () => {
          await getPhoneCode()
          this.second--
          if (this.second <= 0) {
            // 清除定时器
            clearInterval(this.timerId)
            // 重置倒计时
            this.second = this.totalSecond
            // 清空 timerId
            this.timerId = null
          }
        }, 1000)
      }
    },
    // 校验输入框内容
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.phone)) {
        this.$toast('请输入正确的手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.code)) {
        this.$toast('请输入正确的图形验证码')
        return false
      }
      return true
    }

  },
  created () {
    this.$toast('as')
    this.getPicCode1()
  },
  destroyed () {
    clearInterval(this.timerId)
  }
}
</script>

<template>
  <div>
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)"/>
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input class="inp" v-model="phone" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input class="inp" v-model="code" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img v-if="picUrl" :src="picUrl" alt="" @click="getPicCode1()">
        </div>
        <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text">
          <button @click="getCode()">
            {{ totalSecond === second ? '获取验证码' : `${second}秒后重新发送`}}
          </button>
        </div>
      </div>

      <div class="login-btn" >登录</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  padding: 49px 29px;

.title {
  margin-bottom: 20px;
h3 {
  font-size: 26px;
  font-weight: normal;
}
p {
  line-height: 40px;
  font-size: 14px;
  color: #b8b8b8;
}
}

.form-item {
  border-bottom: 1px solid #f3f1f2;
  padding: 8px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
.inp {
  display: block;
  border: none;
  outline: none;
  height: 32px;
  font-size: 14px;
  flex: 1;
}
img {
  width: 94px;
  height: 31px;
}
button {
  height: 31px;
  border: none;
  font-size: 13px;
  color: #cea26a;
  background-color: transparent;
  padding-right: 9px;
}
}

.login-btn {
  width: 100%;
  height: 42px;
  margin-top: 39px;
  background: linear-gradient(90deg,#ecb53c,#ff9211);
  color: #fff;
  border-radius: 39px;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
}
</style>
