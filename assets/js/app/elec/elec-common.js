$(function () {

  function search(page) {
    var detailAdd = $('#user').val();

    $.ajax({
      url: '/house',
      type: 'GET',
      data: {
        detailAdd: detailAdd
      },
      success: function(result) {
        var house = result.data[0].id;

        $.ajax({
          url: '/elec',
          type: 'GET',
          data: {
            house: house,
            page: page
          },
          success: function (result) {
            var elecListHtml = new EJS({url: '/js/app/elec/elec-common.ejs'})
              .render({elecList: result.data});

            $('#tb-elec').empty().html(elecListHtml);
          }
        })
      }
    });
  }

  search();
});
