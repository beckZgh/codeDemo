'use strict'
const Controller = require('egg').Controller
class User extends Controller {
  /**
   * @description 注册
   * @member User
   */
  async singup() {
    await this.ctx.verify('user.signup', 'body')
    const json = await this.ctx.service.user.singUp()
    this.ctx.body = json
  }

  /**
   * @description 登录
   * @memberof User
   */
  async singin() {
    this.ctx.body = '登录'
  }
}

module.exports = User
