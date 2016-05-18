module.exports = function (req, res, next) { // 权限控制策略之登陆

  if (!req.session.user) {
    return res.redirect('/login');
  }

  next();
};
