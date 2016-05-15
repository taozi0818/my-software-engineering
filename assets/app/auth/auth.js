$(function () {
  $('#btn-login').click(function () {
    let username = $('#username').val(),
      password = $('#password').val(); // 获取用户名和密码

    password = Base64.encode(password); // 密码加密传输

    $.ajax({
      url: '/login',
      type: 'POST',
      data: {
        username: username,
        password: password
      },
      success: function () { // 成功后自动跳转
        location.href = '/home';
      },
      error: function () { // 登录失败时的提示
        $('#msg').show().fadeOut(2000);
      }
    })
  });
});
