$(function () {
  $('#btn-login').click(function () {
    let username = $('#username').val(),
      password = $('#password').val();

    $.ajax({
      url: '/login',
      type: 'POST',
      data: {
        username: username,
        password: password
      },
      success: function () {
        location.href = '/home';
      },
      error: function () {
        $('#msg').show().fadeOut(2000);
      }
    })
  });
});
