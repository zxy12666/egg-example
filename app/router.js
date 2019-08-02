'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/home', controller.home.getQuery);
  router.get('/home2', controller.home.getQuerys);
  router.get('/user/:id', controller.user.info);
  router.post('/post', controller.home.postObj);

  //增删改查基础操作
  router.post('/user/select', controller.user.selectUser);
  router.post('/user/add', controller.user.insertUser);
  router.post('/user/edit', controller.user.editUser);
  router.post('/user/delete', controller.user.deleteUser);

  //session操作
  router.post('/session/insert', controller.session.setQuery);
  router.post('/session/select', controller.session.getSession);
};
