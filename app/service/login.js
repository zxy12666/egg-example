/**
 * 登录请求
 */
'use strict';
const Service = require('egg').Service;
class loginService extends Service {
  async loginIn() {
    const { ctx } = this;

    return await ctx.curl(ctx.helper.leo['LEO_URL'], {
         dataType: 'json',
         data: ctx.params
       })
  }
}
module.exports = loginService;
