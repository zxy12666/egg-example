'use strict';

module.exports = app => {
  const { router, controller } = app;
  //session操作
  router.post('/session/insert', controller.session.setQuery);
  router.post('/session/select', controller.session.getSession);
};
