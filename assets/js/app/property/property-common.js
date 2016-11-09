$(function () {

  function search(page) {
    let detailAdd = $('#user').val();

    $.ajax({
      url: '/house',
      type: 'GET',
      data: {
        detailAdd: detailAdd
      },
      success: function(result) {
        let house = result.data[0].id;

        $.ajax({
          url: '/property',
          type: 'GET',
          data: {
            house: house,
            page: page
          },
          success: function (result) {
            let propertyListHtml = new EJS({url: '/app/property/property-common.ejs'})
              .render({propertyList: result.data});

            $('#tb-property').empty().html(propertyListHtml);
          }
        })
      }
    });
  }

  search();
});
