$(function () {
  let $owner = $('#owner').select2({
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

  function detail() {
    let id = window.location.hash.substr(1);

    $.ajax({
      url: '/house/' + id,
      type: 'GET',
      success: function (result) {
        let data = result.data,
          $option = $('<option selected>' + data.owner.name + '</option>')
            .val(data.owner.id);

        $owner.append($option).trigger('change');
        $('#detailAdd').val(data.detailAdd);
      }
    })
  }

  $('#btn-edit').click(function () {
    let owner = $('#owner').val(),
      id = window.location.hash.substr(1);

    $.ajax({
      url: '/house/' + id,
      type: 'PUT',
      data: {
        owner: owner
      },
      success: function () {
        location.href = '/house/list/page';
      }
    });
  });

  detail();
});
