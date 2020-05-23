'use strict'

module.exports = (ctl) => ({
  post: {
    '/signup': ctl.user.singUp, // 注册
    '/signin': ctl.user.singIn, // 登录
  },
})
