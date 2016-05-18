$(function () {
  function change() {
    let username = $('#user').val(),
      old = $('#old-password').val(),
      newP = $('#new-password').val(),
      newP2 = $('#new-password2').val(),
      newPassword, oldPassword;

      newPassword = Base64.encode(newP);
      oldPassword = Base64.encode(old);

    if (newP !== newP2) {
      $('#msg').text('两次密码不一致，请重新输入');
      $('#msg').show();
      $('#msg').fadeOut(2000);
      return;
    }

    $.ajax({
      url: '/password',
      type: 'PUT',
      data: {
        username: username,
        oldPassword: oldPassword,
        newPassword: newPassword
      },
      success: function (result) {
        if (result === '原密码不正确!') {
          $('#msg').text('原密码不正确,请重新输入');
          $('#msg').show();
          $('#msg').fadeOut(2000);
          return;
        }
        $('#msg').text('操作成功!');

        setTimeout(function () {
          location.href = '/home';
        }, 2000);
      },
      error: function (err) {
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
