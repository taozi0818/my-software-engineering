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
          url: '/persons',
          type: 'GET',
          data: {
            house: house,
            page: page
          },
          success: function (result) {
            let personListHtml = new EJS({url: '/app/person/person-common.ejs'})
              .render({personList: result.data});

            $('#tb-person').empty().html(personListHtml);
          }
        })
      }
    });
  }

  search();
});
