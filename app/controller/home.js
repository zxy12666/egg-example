'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getQuery() {
    const { ctx } = this;
    const queryObj = this.ctx.query;
    console.log(queryObj.age);
    console.log(queryObj);
    //打印结果：{ name: 'egg', age: '26' }
    ctx.body = 'hi, egg';
  }
  async getQuerys() {
    const { ctx } = this;
    const queryObj = this.ctx.queries;
    console.log(queryObj.age);
    console.log(queryObj);
    //打印结果：{ name: 'egg', age: '26' }
    ctx.body = 'hi, egg';
  }
  async postObj() {
    const { ctx } = this;
    ctx.body = ctx.params;
  }
}

module.exports = HomeController;
