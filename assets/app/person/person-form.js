$(function () {
  let $house = $('#house').select2({
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

  // 初始化时间插件
  $('#birthday').datetimepicker({
    format: 'yyyy-mm-dd',
    startView: 3,
    minView: 2,
    autoclose: true,
    language: 'zh-CN'
  });

  $('#sex').select2();
  $('#education').select2();
  $('#btn-create').click(function () {
    let house = $house.val(),
      sex = $('#sex').val(),
      nation = $('#nation').val(),
      education = $('#education').val(),
      work = $('#work').val(),
      company = $('#company').val(),
      phone = $('#phone').val(),
      identity = $('#identity').val(),
      birthday = $('#birthday').val(),
      name = $('#name').val();

    // AJAX发送请求,成功后跳转小区人员列表界面
    $.ajax({
      url: '/persons',
      type: 'POST',
      data: {
        name: name,
        sex: sex,
        nation: nation,
        education: education,
        work: work,
        company: company,
        phone: phone,
        identity: identity,
        birthday: birthday,
        house: house
      },
      success: function () {
        location.href = '/persons/list/page';
      }
    });
  });

  $('#btn-edit').click(function () {
    let id = window.location.hash.substr(1),
      house = $('#house').val(),
      sex = $('#sex').val(),
      nation = $('#nation').val(),
      education = $('#education').val(),
      work = $('#work').val(),
      company = $('#company').val(),
      phone = $('#phone').val(),
      identity = $('#identity').val(),
      birthday = $('#birthday').val(),
      name = $('#name').val();

    $.ajax({
      url: '/persons/' + id,
      type: 'PUT',
      data: {
        name: name,
        sex: sex,
        nation: nation,
        education: education,
        work: work,
        company: company,
        phone: phone,
        identity: identity,
        birthday: birthday,
        house: house
      },
      success: function () {
        location.href = '/persons/list/page';
      }
    });
  });

  function detail() {
    let id = window.location.hash.substr(1);

    $.ajax({
      url: '/persons/' + id,
      type: 'GET',
      success: function (result) {
        let data = result.data,
          $option = $('<option selected>' + data.house.detailAdd + '</option>')
            .val(data.house);

        $house.append($option).trigger('change');
        $('#name').val(data.name);
        $('#nation').val(data.nation);
        $('#work').val(data.work);
        $('#company').val(data.company);
        $('#phone').val(data.phone);
        $('#identity').val(data.identity);
        $('#btn-birthday').text(data.birthday);
        $('#birthday').val(data.birthday);
        $('#sex').val(data.sex).trigger('change');
        $('#education').val(data.education).trigger('change');
        $('#btn-create').addClass('hidden');
        $('#btn-edit').removeClass('hidden');

      }
    })
  }

  if (window.location.hash) {
    detail();
  }

});
