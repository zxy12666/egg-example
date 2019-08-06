'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async loginIn() {
    const { ctx, app } = this;

    const validateResult = await ctx.validate('login.signIn', ctx.params); // 第一个参数对应于rules目录下目录或文件
    if (!validateResult) {
      return;
    }

    const loginInfo = await ctx.service.login.loginIn(ctx.params);
    // 省略部分代码
    ctx.helper.success({ ctx, code:200, res:`登录成功${loginInfo.userno}` })
  }
}

module.exports = LoginController;
