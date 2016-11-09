/**
 * 权限控制,访问拦截
 * 登陆过的用户才有访问权限
 * @param req
 * @param res
 * @param next
 */

module.exports = function (req, res, next) { 

  if (!req.session.user) {
    return res.redirect('/login');
  }

  next();
};
