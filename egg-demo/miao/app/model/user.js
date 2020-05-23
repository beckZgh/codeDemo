'use strict'

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      inviter_id: DataTypes.INTEGER,
      email: DataTypes.STRING(40),
      password: DataTypes.STRING,
      username: DataTypes.STRING(40),
      weibo: DataTypes.STRING(40),
      weixin: DataTypes.STRING(40),
      team_id: DataTypes.INTEGER,
      receive_remote: DataTypes.TINYINT(1),
      email_verifyed: DataTypes.TINYINT(1),
      avatar: DataTypes.STRING(40),
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  )

  /**
   * * 哈希密码 Hooks
   * @param {user} user 用户实例
   * @return {void}
   */
  async function hashPwd(user) {
    if (!user.changed('password')) {
      return
    }

    user.password = await bcrypt.hash(user.password, 10)
  }

  User.beforeSave(hashPwd)

  /**
   * * 用户登录方法
   * @param {string} email 邮箱
   * @oaram {string} password 密码
   * @return {(User|boolean)} 登录成功的用户
   */

  User.Auth = async function (email, password) {
    const user = await this.findOne({
      where: {
        email,
      },
    })
    if (await bcrypt.compare(password, user.password)) {
      return user
    }

    return false
  }

  return User
}
