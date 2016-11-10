$(function () {


  function search(page) {
    var detailAdd = sessionStorage.getItem('user'); // 布局中隐藏域的用户名

    $.ajax({ // 根据账号查看相关人员列表
      url: '/house',
      type: 'GET',
      data: {
        detailAdd: detailAdd
      },
      success: function(result) {
        var house = result.data[0].id;

        $.ajax({
          url: '/persons',
          type: 'GET',
          data: {
            house: house,
            page: page
          },
          success: function (result) { // 请求成功后显示列表
            var personListHtml = new EJS({url: '/js/app/person/person-common.ejs'})
              .render({personList: result.data});

            $('#tb-person').empty().html(personListHtml);
          }
        })
      }
    });
  }

  search();
});
