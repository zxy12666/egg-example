/**
 * 添加文章接口
 */
'use strict';
const Service = require('egg').Service;
class ArticleService extends Service {
  async add() {
    const { ctx } = this;
    // 获取请求参数
    const {
      userId,
      title,
      content,
    } = ctx.params;
    const result = await ctx.model.Article.create({
      userId,
      title,
      content,
    });
    return result;
  }
  async insertArticle() {
    const { ctx } = this;
    // 获取请求参数
    const {
      userId,
      title,
      content,
    } = ctx.params;
    const result = await ctx.model.Article.create({
      userId,
      title,
      content,
    });
    return result;
  }
  async selectArticle(){
    const { ctx } = this;

    // 获取请求参数
    const {
      pageSize,
      pageNum,
      keyName,
    } = ctx.params;
    const result = await ctx.model.Article.find({userId: { $regex: keyName, $options: 'i' } }).skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize))

    return result;
  }
}
module.exports = ArticleService;
