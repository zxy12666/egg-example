'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    userId: {
      type: String,
      index: {
        unique: true,
      }, // 该字段为唯一字段
      require: true, // 必填项
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  });
  return mongoose.model('Article', ArticleSchema, 'article');
};
