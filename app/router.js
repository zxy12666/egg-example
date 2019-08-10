'use strict';

const userRouter = require('./routers/user');
const sessionRouter = require('./routers/session');
const articleRouter = require('./routers/article');
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/home', controller.home.getQuery);
  router.get('/home2', controller.home.getQuerys);
  router.post('/post', controller.home.postObj);
  userRouter(app);
  sessionRouter(app);
  articleRouter(app);
};
