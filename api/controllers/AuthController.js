import then from 'thenjs';

module.exports = {
  loginPage: function (req, res) { // 登陆页面
    res.render('login.ejs');
  },
  login: function (req, res, next) { // 登陆逻辑
    let username = req.body.username,
      password = req.body.password;

    then(function (defer) {
      User.findOne({username: username})
        .populate('role')
        .exec(defer);
    }).then(function (defer, userInfo) {

      if (userInfo.password == password) {
        req.session.user = username;
        req.session.role = userInfo.role;
        return res.success(userInfo);
      } else {
        return res.error(EService.E_PASSWORD);
      }
    }).fail(function (defer, err) {

      return next(err);
    });
  },
  change: function (req, res, next) {
    let username = req.body.username,
      oldPassword = req.body.oldPassword,
      newPassword = req.body.newPassword;

    then(function (defer) {

      User.findOne({username: username}, defer); // 查找用户
    }).then(function (defer, userInfo) {
      console.log(userInfo);

      if (userInfo.password !== oldPassword) { // 验证密码
        return res.send('原密码不正确!');
      }

      User.update({username: username}, {password: newPassword}, defer); // 密码正确则给予修改密码
    }).then(function (defer, data) {

      return res.success(data);
    }).fail(function (defer, err) {

      return next(err);
    })
  },
  logout: function (req, res, next) { // 账号登出
    req.session.destroy(function () {
      return res.redirect('/login');
    });
  },
  changePage: function (req, res) { // 更改密码页面
    res.render('password/password.ejs');
  }
};
