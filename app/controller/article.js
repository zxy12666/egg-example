'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async info() {
    const { ctx } = this;
    const articleInfo = await ctx.model.Article.find();
    ctx.helper.success({ ctx, res:articleInfo })
  }
  // async selectUser() {
  //   const { ctx } = this;
  //   const user = await ctx.service.user.selectUser(ctx.params);
  //   ctx.body=user
  // }
  async insertArticle() {
    const { ctx } = this;
    const rs = await ctx.service.article.add(ctx.params)
    ctx.body=rs;
  }
  // async editUser() {
  //   const { ctx } = this;
  //   const rs = await ctx.service.user.editUser(ctx.params);
  //   if(rs.affectedRows === 1){
  //     ctx.helper.success({ ctx, res:'编辑成功' })
  //   }else{
  //     ctx.body='编辑失败'
  //     ctx.helper.fail({ ctx,  res:'编辑失败' })
  //   }
  // }
  // async deleteUser() {
  //   const { ctx } = this;
  //   const rs = await ctx.service.user.deleteUser(ctx.params);
  //   if(rs.affectedRows === 1){
  //     ctx.helper.success({ ctx, res:'删除成功' })
  //   }else{
  //     ctx.helper.fail({ ctx,  res:'删除失败' })
  //   }
  // }
}

module.exports = ArticleController;
