/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588945357591_3433'

  // add your middleware config here
  config.middleware = []

  // mysql
  config.sequelize = {
    dialect: 'mysql',
    database: 'miao',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'sumdoo',
  }

  config.flash = {
    key: Symbol.for('flash'),
  }

  config.security = {
    csrf: {
      ignoreJSON: true,
    },
  }

  config.validator = {
    open: 'zh-CN',
    languages: {
      'zh-CN': {
        required: '必须填 %s 字段',
      },
    },
    async formatter(ctx, error) {
      // eslint-disable-next-line no-undef
      info('[egg-y-validator] -> %s', JSON.stringify(error, ' '))
      throw new Error(error[0].message)
    },
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
