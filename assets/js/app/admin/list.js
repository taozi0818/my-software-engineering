$(function () {

  function search(page) {

    $.ajax({
      url: '/admin/users',
      method: 'GET',
      data: {
        page: page
      },
      success: function (result) {
        let userListHtml = new EJS({url: '/js/app/admin/list.ejs'})
            .render({userList: result.data}),
          pagerHtml = new EJS({url: '/js/app/pager/pager.ejs'}) // 分页
            .render({page: result.page, pageCount: result.pageCount});

        $('#tb-user').empty().html(userListHtml);
        $('#pager').empty().html(pagerHtml);
      }
    });
  }

  search();
});
