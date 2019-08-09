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
    if(loginInfo.success){
      ctx.session.userinfo=loginInfo.data
      await this.ctx.service.cache.set('userInfo',loginInfo.data,60*60);
      ctx.helper.success({ ctx, code:200, res:loginInfo.data })
    }else{
      ctx.helper.fail({ ctx, res:loginInfo.errorMsg})
    }
  }
}

module.exports = LoginController;
