module.exports = function (req, res, next) {

  if (!req.session.user) {
    console.log('not exists!');
    return res.redirect('/login');
  }

  next();

};
