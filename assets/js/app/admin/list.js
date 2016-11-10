$(function () {

  var $pager = $('#pager');

  $('#btn-search').click(function () {
    search();
  });

  // 上一页
  $pager.on('click', '#pager-pre', function () {
    var page = window.location.hash.substr(1) || 1;

    if (page === 1) {
      search(1);
    } else {
      search(page - 1);
    }
  });

  // 下一页
  $pager.on('click', '#pager-next', function () {
    var page = window.location.hash.substr(1) || 1;

    search(page + 1);
  });

  $pager.on('click', '.pager-page', function () {
    var page = $(this).attr('data');

    search(page);
  });

  function search(page) {
    var username = $('#input-username').val(),
      role = $('#input-role').val();

    $.ajax({
      url: '/admin/users',
      type: 'GET',
      data: {
        username: username,
        role: role,
        page: page
      },
      success: function (result) {
        var userListHtml = new EJS({url: '/js/app/admin/user-list.ejs'})
            .render({userList: result.data}),
          pagerHtml = new EJS({url: '/js/app/pager/pager.ejs'}) // 分页
            .render({page: result.page, pageCount: result.pageCount});

        $('#tb-user').empty().html(userListHtml);
        $('#pager').empty().html(pagerHtml);
      }
    });
  }

  function resetPassword(username, dialog) {
    $.ajax({
      url: '/admin/reset',
      type: 'PUT',
      data: {
        username: username
      },
      success: function () {
        var page = window.location.hash.substr(1);
        dialog.close();
        search(page);
      }
    });
  }

  $('#tb-user').on('click', '.btn-reset', function () {
    var username = $(this).prev().attr('data');

    BootstrapDialog.show({
      title: '重置密码',
      message: '确定是否将密码重置为123456',
      closable: true,
      type: BootstrapDialog.TYPE_WARNING,
      buttons: [
        {
          label: '确认',
          cssClass: 'btn-primary',
          action: function (dialog) {
            resetPassword(username, dialog);
          }
        },
        {
          label: '取消',
          cssClass: 'btn-default',
          action: function (dialog) {
            dialog.close();
          }
        }
      ]
    })
  });

  search();
});
