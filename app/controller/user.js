'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.addName(ctx.params.id);
  }
  async selectUser() {
    const { ctx } = this;
    const user = await ctx.service.user.selectUser(ctx.params);
    ctx.body=user
  }
  async insertUser() {
    const { ctx } = this;
    const rs = await ctx.service.user.insertUser(ctx.params);
    if(rs.affectedRows === 1){
      ctx.body='新增成功'
    }else{
      ctx.body='新增失败'
    }
  }
  async editUser() {
    const { ctx } = this;
    const rs = await ctx.service.user.editUser(ctx.params);
    if(rs.affectedRows === 1){
      ctx.body='编辑成功'
    }else{
      ctx.body='编辑失败'
    }
  }
  async deleteUser() {
    const { ctx } = this;
    const rs = await ctx.service.user.deleteUser(ctx.params);
    if(rs.affectedRows === 1){
      ctx.body='删除成功'
    }else{
      ctx.body='删除失败'
    }
  }
}

module.exports = UserController;
