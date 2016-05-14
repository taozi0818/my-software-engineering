import then from 'thenjs';

module.exports = {
  loginPage: function (req, res) {
    res.render('login.ejs');
  },
  login: function (req, res, next) {
    let username = req.body.username,
      password = req.body.password;

    then(function (defer) {
      User.findOne({username: username}, defer);
    }).then(function (defer, userInfo) {

      if (userInfo.password == password) {
        req.session.user = {username: username};
        return res.success();
      } else {
        return res.error();
      }
    }).fail(function (defer, err) {

      return next(err);
    })
  },
  logout: function (req, res) {
    req.session.destroy(function () {
      return res.redirect('/login');
    })
  }
};
