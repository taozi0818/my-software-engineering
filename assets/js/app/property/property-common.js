$(function () {

  function search(page) {
    var detailAdd = sessionStorage.getItem('user');

    $.ajax({
      url: '/house',
      type: 'GET',
      data: {
        detailAdd: detailAdd
      },
      success: function(result) {
        var house = result.data[0].id;

        $.ajax({
          url: '/property',
          type: 'GET',
          data: {
            house: house,
            page: page
          },
          success: function (result) {
            var propertyListHtml = new EJS({url: '/js/app/property/property-common.ejs'})
              .render({propertyList: result.data});

            $('#tb-property').empty().html(propertyListHtml);
          }
        })
      }
    });
  }

  search();
});
