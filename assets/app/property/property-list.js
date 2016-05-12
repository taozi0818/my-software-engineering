$(function () {
  let $pager = $('#pager'),
    $house = $('#house').select2({
      ajax: {
        url: "/house",
        dataType: 'json',
        delay: 500,
        data: function (params) {
          return {
            detailAdd: params.term,
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
      minimumInputLength: 2,
      templateResult: function (repo) {
        if (repo.loading) {
          return repo.text;
        }

        let result = [];
        result.push('<div>');
        result.push('<i class="fa fa-home fa-2x"></i>');
        result.push('<span style="margin-left: 1em;">' + repo.detailAdd + '</span>');
        result.push(' - ' + repo.owner.name);
        result.push('</div');

        return result;
      },
      templateSelection: function (repo) {
        return repo.detailAdd || repo.text;
      }
    });

  // 加载输入框样式
  $('#status').select2();
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

  $('#btn-search').click(function () {
    search();
  });

  $('#btn-clear').click(function () {
    $('#house').val('').trigger();
    $('#status').val('').trigger();
  });

  function search(page) {
    let status = $('#status').val();

    $.ajax({
      url: '/property',
      type: 'GET',
      data: {
        page: page,
        status: status
      },
      success: function (result) {
        let proListHtml = new EJS({url: '/app/property/property-list.ejs'})
          .render({propertyList: result.data}),
          pagerHtml = new EJS({url: '/app/pager/pager.ejs'})
            .render({page: result.page, pageCount: result.pageCount});

        $('#tb-property').empty().html(proListHtml);
        $('#pager').empty().html(pagerHtml);
      }
    });
  }

  search();
});
