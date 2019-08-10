'use strict';

module.exports = app => {
  const { router, controller } = app;
  //增删改查基础操作
  router.post('/article/select', controller.article.info);
  router.post('/article/add', controller.article.insertArticle)
};
