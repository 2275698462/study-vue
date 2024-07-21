import request from '@/utils/request'

// 获取图形验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 登录
export const getPhoneCode = () => {
  return request.post('/captcha/sendSmsCaptcha')
}
