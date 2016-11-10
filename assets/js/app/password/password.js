$(function () {
  function change() {
    var username = $('#user').val(),
      old = $('#old-password').val(),
      newP = $('#new-password').val(),
      newP2 = $('#new-password2').val(),
      newPassword = $.md5(newP),
      oldPassword = $.md5(old); // 加密传输

    if (newP !== newP2) { // 前端直接校验两次密码是否一致
      $('#msg').text('两次密码不一致，请重新输入');
      $('#msg').show();
      $('#msg').fadeOut(2000);
      return;
    }

    $.ajax({ // ajax请求
      url: '/password',
      type: 'PUT',
      data: {
        username: username,
        oldPassword: oldPassword,
        newPassword: newPassword
      },
      success: function (result) { // 原密码不正确时候的提示
        if (result === '原密码不正确!') {
          $('#msg').text('原密码不正确,请重新输入');
          $('#msg').show();
          $('#msg').fadeOut(2000);
          return;
        }
        $('#msg').text('操作成功!2秒后自动跳转主页');

        setTimeout(function () {
          location.href = '/home';
        }, 2000); // 延时操作,2秒后跳转主页
      },
      error: function (err) { // 错误处理
        $('#msg').text(err);
        $('#msg').show();
        $('#msg').fadeOut(2000);
      }
    })
  }

  $('#btn-change').click(function () {
    change();
  })
});
