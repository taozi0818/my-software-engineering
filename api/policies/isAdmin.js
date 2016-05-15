module.exports = function (req, res, next) {

  if (req.session.isAdmin === false) {
    return res.error('对不起,只有管理员身份才能访问');
  }

  next();
};
