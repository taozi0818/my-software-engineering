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
        req.session.user = username;
        req.session.isAdmin = userInfo.isAdmin;
        return res.success();
      }
    }).fail(function (defer, err) {

      return res.error(err);
    })
  },
  change: function (req, res, next) {
    let username = req.body.username,
      oldPassword = req.body.oldPassword,
      newPassword = req.body.newPassword;

    then(function (defer) {

      User.findOne({username: username}, defer);
    }).then(function (defer, userInfo) {
      console.log(userInfo);

      if (userInfo.password !== oldPassword) {
        return res.send('原密码不正确!');
      }

      User.update({username: username}, {password: newPassword}, defer);
    }).then(function (defer, data) {

      return res.success(data);
    }).fail(function (defer, err) {

      return next(err);
    })
  },
  logout: function (req, res, next) {
    req.session.destroy(function () {
      return res.redirect('/login');
    })
  },
  changePage: function (req, res) {
    res.render('password/password.ejs');
  }

};
