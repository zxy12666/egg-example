/**
 * 登录请求
 */
'use strict';
const Service = require('egg').Service;
class loginService extends Service {
  async loginIn() {
    const { ctx } = this;
    console.log(JSON.stringify(ctx.params))
    const result = await ctx.curl(ctx.helper.leo['LEO_URL']+'loginErp', {
      method: 'POST',
      dataType: 'json',
      data: JSON.stringify(ctx.params),
    });
    return result.data
  }
}
module.exports = loginService;
