/* eslint valid-jsdoc: "off" */
'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3309',
      // 用户名
      user: 'zxy',
      // 密码
      password: '111111',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 注入中间件
  config.middleware = [
    'auth',
    'params',
    'errorHandler',
  ];

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1563936181567_2092';

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // config/config.default.js
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [], // 配置白名单
  };

  config.cors = {
    // origin: '*',//允许所有跨域访问，注释掉则允许上面 白名单 访问
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.session={
    key:'SESSION_ID',
    maxAge:864000,
    renew: true //延长会话有效期
  }
  config.cluster = {
    listen: {
      port: 7001,
      hostname: '127.0.0.1',
      // path: '/var/run/egg.sock',
    }
  }
  config.validatePlus = {

    resolveError(ctx, errors) {

      if (errors.length) {

        ctx.type = 'json';

        ctx.status = 400;

        ctx.body = {
          code: 400,
          error: errors,
          message: '参数错误',
        };
      }
    }
  }
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: 'zxy12666',
      db: 0,
    }
  }
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1/asGiant',
    options: {
      server: {
        poolSize: 40,
      },
    },
  };
  return {
    ...config,
    ...userConfig
  };
};
