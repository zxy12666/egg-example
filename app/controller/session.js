const Controller = require('egg').Controller;

class SessionController extends Controller {
  async getSession() {
    const { ctx } = this;
    ctx.helper.success({ ctx, code:200, res:this.ctx.session })
  }
  async setQuery() {
    const { ctx } = this;
    ctx.session.userinfo=ctx.params
    ctx.helper.success({ ctx, code:200, res:'操作成功' })
  }
}
module.exports = SessionController;
