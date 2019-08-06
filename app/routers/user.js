'use strict';

module.exports = app => {
  const { router, controller } = app;
  //增删改查基础操作
  router.post('/user/select', controller.user.selectUser);
  router.post('/user/add', controller.user.insertUser);
  router.post('/user/edit', controller.user.editUser);
  router.post('/user/delete', controller.user.deleteUser);
  router.get('/user/:id', controller.user.info);
  router.post('/user/login', controller.login.loginIn);
};
