$(function () {

  $('#header').removeClass('hidden');
  $('#action').removeClass('hidden');

  let $pager = $('#pager'),
    $house = $('#house').select2({ // 模糊搜索加载数据库内容
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
      theme: 'classic',
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

  // 点击删除
  $('#tb-person').on('click', '.btn-delete', function () {
    var $allTd = $(this).parent().parent().children(),
      name = $allTd.eq(1).text().trim(),
      id = $allTd.find('.hid-id')[0].value,
      tpl = [
        '<div class="input-group">',
        '<p>请确认是否删除<span><strong>' + name + '</strong></span>,删除后将无法恢复!</p>',
        '</div>',
        '<input id="id" type="hidden" value="' + id + '">'
      ];

    BootstrapDialog.show({
      title: '删除人员',
      message: $(tpl.join('')),
      closable: true,
      type: BootstrapDialog.TYPE_DANGER,
      buttons: [
        {
          label: '确认',
          cssClass: 'btn-default',
          action: delPerson
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

  function delPerson(dialogRef) {
    let id = $('#id').val();

    $.ajax({
      url: '/persons/' + id,
      type: 'DELETE',
      success: function () {
        dialogRef.close();
        search();
      },
      error: function () {
        dialogRef.close();
      }
    })
  }

  $('#btn-search').click(function () {
    search();
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

  $('#btn-clear').click(function () {
    $('#name').val('');
    $('#house').val('').trigger('change');
  });

  function search(page) {
    let name = $('#name').val(),
      house = $('#house').val();
  
    $.ajax({
      url: '/persons',
      type: 'GET',
      data: {
        name: name,
        house: house,
        page: page
      },
      success: function (result) {
        let personListHtml = new EJS({url: '/js/app/person/person-list.ejs'})
          .render({personList: result.data}),
          pagerHtml = new EJS({url: '/js/app/pager/pager.ejs'}) // 分页
            .render({page: result.page, pageCount: result.pageCount});
  
        $('#tb-person').empty().html(personListHtml);
        $('#pager').empty().html(pagerHtml);
      }
    })
  }
  
  search();
});
