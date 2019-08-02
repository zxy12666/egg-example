'use strict';

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.session = {
  key: 'EGG_SESS',
  maxAge: 24 * 3600 * 1000, // 1 day httpOnly: true,
  encrypt: true
};
