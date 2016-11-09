$(function () {

  $('#header').removeClass('hidden');
  $('#action').removeClass('hidden');
  
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
    $('#house').val('').trigger('change');
    $('#status').val('').trigger('change');
  });

  $('#tb-elec').on('click', '.btn-clear', function () {
    var $allTd = $(this).parent().parent().children(),
      id = $allTd.find('.hide-id')[0].value,
      detailAdd = $allTd.find('.hide-id')[1].value,
      temp = [
        '<input class="hidden" id="id" value="' + id + '">',
        '<p><span class="text-bold" style="color:#FF0000;">' + detailAdd +'</span>的欠费记录将清零,继续请点击确认</p>'
      ];

    BootstrapDialog.show({
      title: '欠费清零',
      message: $(temp.join('')),
      closable: true,
      type: BootstrapDialog.TYPE_DANGER,
      buttons: [
        {
          label: '确认',
          cssClass: 'btn-primary',
          action: clear
        },
        {
          label: '取消',
          cssClass: 'btn-default',
          action: function (dialogRef) {
            dialogRef.close();
          }
        }
      ]
    });
  });

  function clear(dialogRef) {
    let id = $('#id').val();

    $.ajax({
      url: '/elec/clear/' + id,
      type: 'PUT',
      data: {},
      success: function () {
        dialogRef.close();
        search();
      },
      error: function () {
        dialogRef.close();
      }
    })
  }

  function search(page) {
    let status = $('#status').val();

    $.ajax({
      url: '/elec',
      type: 'GET',
      data: {
        page: page,
        status: status
      },
      success: function (result) {
        let elecListHtml = new EJS({url: '/app/elec/elec-list.ejs'})
          .render({elecList: result.data}),
          pagerHtml = new EJS({url: '/app/pager/pager.ejs'})
            .render({page: result.page, pageCount: result.pageCount});

        $('#tb-elec').empty().html(elecListHtml);
        $('#pager').empty().html(pagerHtml);
      }
    });
  }

  search();
});
