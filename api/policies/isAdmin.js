/**
 * 权限控制,管理员与非管理员 
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */

module.exports = function (req, res, next) { 

  if (req.session.role && req.session.role.name !== 'admin') {
    return res.error('对不起,只有管理员身份才能访问');
  }

  next();
};
