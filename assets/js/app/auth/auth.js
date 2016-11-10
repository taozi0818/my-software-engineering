$(function () {

  $('#btn-login').click(function () {
    login();
  });

  $('#username').keydown(function (event) {
    if (event.keyCode === 13) {
      login();
    }
  });

  $('#password').keydown(function (event) {
    if (event.keyCode === 13) {
      login();
    }
  });

  function login() { // 发送登陆请求
    var username = $('#username').val(),
      password = $('#password').val(); // 获取用户名和密码

    password = $.md5(password); // 密码加密传输

    $.ajax({ // ajax请求登陆
      url: '/login',
      type: 'POST',
      data: {
        username: username,
        password: password
      },
      success: function (result) { // 成功后自动跳转
        sessionStorage.setItem('user', result.data.username);
        sessionStorage.setItem('role', result.data.role.name);
        location.href = '/home';
      },
      error: function () { // 登录失败时的提示
        $('#msg').show();
        $('#msg').fadeOut(3000);
      }
    });
  }
});
