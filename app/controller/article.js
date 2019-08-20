'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async info() {
    const { ctx } = this;
    const articleInfo = await ctx.model.Article.find();
    ctx.helper.success({ ctx, res:articleInfo })
  }
  async selectArticle() {
    const { ctx } = this;
    const articleList = await ctx.service.article.selectArticle(ctx.params);
    ctx.helper.success({ ctx, res:articleList })
  }
  async insertArticle() {
    const { ctx } = this;
    const rs = await ctx.service.article.add(ctx.params)
    ctx.body=rs;
    ctx.helper.success({ ctx, res:rs })
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
