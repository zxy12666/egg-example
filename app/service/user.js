// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
  async addName(name) {
    return `你好,${name}`;
  }
  async insertUser(user) {
    const result = await this.app.mysql.insert('users', user)
    return result
  }
  async selectUser(p) {
    const result = await this.app.mysql.select('users', {
      // columns: ['id', 'name'], //查询字段，全部查询则不写，相当于查询*
      // where: {
      //   // name: 'wjw'
      // }, //查询条件
      orders: [
        ['id', 'desc'] //降序desc，升序asc
      ],
      limit: p.pageSize, //查询条数
      offset: (p.pageNumber-1)*p.pageSize //数据偏移量（分页查询使用）
    })
    return result
  }
  async editUser(p) {
    const result = await this.app.mysql.update('users', {
      age: p.age //需要修改的数据
    }, {
      where: {
        id: p.id
      } //修改查询条件
    });
    return result
  }
  async deleteUser(p) {
    const result = await this.app.mysql.delete('users', {
      id: p.id,
      name: p.name
    })
    return result
  }
}

module.exports = UserService;
