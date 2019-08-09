'use strict';

const rule = {
  loginName: [
    { required: true, message: '用户名不能为空' },
    { type: 'string', message: '用户名字段需要是字符串' },
  ],
  password: [
    { required: true, message: '密码不能为空' },
    { type: 'string', message: '密码字段需要是字符串' },
    // {
    //   // eslint-disable-next-line no-unused-vars
    //   validator(rule, value, callback, source, options) {
    //     const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    //     if (pattern.test(value)) {
    //       callback(); // 验证通过
    //       return;
    //     }
    //     callback({ message: '密码最少包含一个大小写字母、数字并且为8-16位' }); // 验证不通过
    //   },
    // },
  ],
};
module.exports = rule;
