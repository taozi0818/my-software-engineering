$(function () {
  let $pager = $('#pager'),
    $owner = $('#owner').select2({
      ajax: {
        url: "/persons",
        dataType: 'json',
        delay: 500,
        data: function (params) {
          return {
            name: params.term,
            page: params.page
          };
        },
        processResults: function (data, params) {
          params.page = params.page || 1;

          return {
            results: data.data,
            pagination: {
              more: (params.page * 20) < data.total
            }
          };
        }
      },
      escapeMarkup: function (markup) {
        return markup;
      },
      theme: 'classic',
      minimumInputLength: 2,
      templateResult: function (repo) {
        if (repo.loading) {
          return repo.text;
        }

        let result = [];
        result.push('<div>');
        result.push('<i class="fa fa-user fa-2x"></i>');
        result.push('<span style="margin-left: 1em;">' + repo.name + '</span>');
        result.push('</div');

        return result;
      },
      templateSelection: function (repo) {
        return repo.name || repo.text;
      }
    });

  // 上一页
  $pager.on('click', '#pager-pre', function () {
    let page = window.location.hash.substr(1) || 1;

    if (page === 1) {
      search(1);
    } else {
      search(page - 1);
    }
  });

  // 下一页
  $pager.on('click', '#pager-next', function () {
    let page = window.location.hash.substr(1) || 1;

    search(page + 1);
  });

  $pager.on('click', '.pager-page', function () {
    let page = $(this).attr('data');

    search(page);
  });

  function search(page) {
    let owner = $('#owner').val(),
      detailAdd = $('#detailAdd').val();

    $.ajax({
      url: '/house',
      type: 'GET',
      data: {
        owner: owner,
        detailAdd: detailAdd,
        page: page
      },
      success: function (result) {
        let houseListHtml = new EJS({url: '/app/house/house-list.ejs'})
          .render({houseList: result.data}),
          pagerHtml = new EJS({url: '/app/pager/pager.ejs'})
            .render({page: result.page, pageCount: result.pageCount});

        $('#tb-house').empty().html(houseListHtml);
        $('#pager').empty().html(pagerHtml);
      }
    })
  }

  $('#btn-search').click(function () {
    search();
  });

  $('#btn-clear').click(function () {
    $('#owner').val('').trigger('change');
    $('#detailAdd').val('');
  });

  search();
});
