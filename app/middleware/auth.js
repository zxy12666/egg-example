module.exports = options => {
  return async function auth(ctx, next) {
    if(ctx.path==='/'||ctx.path==='/user/login'||ctx.path==='session/insert'){
      await next();
    }else{
      if(!ctx.session.userinfo){
        ctx.helper.fail({ ctx, code:401, res:'用户未登录'})
      }else{
        await next();
      }
    }
  };
};
