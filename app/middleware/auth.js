module.exports = options => {
  return async function auth(ctx, next) {
    await next();
    if(ctx.path=='/'||ctx.path=='/login'||ctx.path=='session/insert'){
      return;
    }
    if(!ctx.session.userinfo.name){
      ctx.helper.success({ ctx, code:200, res:'用户未登录'})
    }

  };
};
