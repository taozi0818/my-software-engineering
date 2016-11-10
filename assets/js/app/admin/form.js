$(function () {
  $('#role').select2();

  var $house = $('#house').select2({
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

      var result = [];
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

  $('#btn-create').click(function () {
    var username = $('#input-username').val(),
      house = $('#house').val(),
      role = $('#input-role').val();

    $.ajax({
      url: '/admin/user',
      type: 'POST',
      data: {
        username: username,
        role: role,
        house: house
      },
      success: function (result) {
        var message = '该房屋已经有绑定账号';

        if (result.data == 'HOUSE_BINDED') {

          BootstrapDialog.show({
            title: '创建失败',
            message: message,
            closable: true,
            type: BootstrapDialog.TYPE_DANGER,
            buttons: [
              {
                label: '确认',
                cssClass: 'btn-primary',
                action: function (dialog) {
                  dialog.close();
                }
              }
            ]
          });
        }
      }
    });
  });
});
