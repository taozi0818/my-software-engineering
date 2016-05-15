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
          url: '/elec',
          type: 'GET',
          data: {
            house: house,
            page: page
          },
          success: function (result) {
            let elecListHtml = new EJS({url: '/app/elec/elec-common.ejs'})
              .render({elecList: result.data});

            $('#tb-elec').empty().html(elecListHtml);
          }
        })
      }
    });
  }

  search();
});
