$(function () {
  var $house = $('#house').select2({ // 住房选项支持模糊搜索,控制数据库中的数据一致性
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

  $('#work').select2().change(function () { // 页面中状态选相框变化事件
    var work = $('#work').val();

    if (work === '在校') {
      $('#l-school').removeClass('hidden');
      $('#l-company').addClass('hidden');
      $('#l-else').addClass('hidden');
      $('#company').removeClass('hidden')
    } else if (work === '在职') {
      $('#l-company').removeClass('hidden');
      $('#l-school').addClass('hidden');
      $('#l-else').addClass('hidden');
      $('#company').removeClass('hidden')
    } else if (work === " " ){
      $('#l-company').addClass('hidden');
      $('#l-school').addClass('hidden');
      $('#l-else').addClass('hidden');
      $('#company').addClass('hidden');
    } else {
      $('#l-else').removeClass('hidden');
      $('#l-company').addClass('hidden');
      $('#l-school').addClass('hidden');
      $('#company').removeClass('hidden')
    }

  });


  // 初始化时间插件,详细参数请老师阅读文档
  $('#birthday').datetimepicker({
    format: 'yyyy-mm-dd',
    startView: 3,
    minView: 2,
    autoclose: true,
    language: 'zh-CN'
  });

  // 初始化select元素
  $('#sex').select2();
  $('#education').select2();

  // 创建按钮点击事件
  $('#btn-create').click(function () {
    var house = $house.val(),
      sex = $('#sex').val(),
      nation = $('#nation').val(),
      education = $('#education').val(),
      work = $('#work').val(),
      company = $('#company').val(),
      phone = $('#phone').val(),
      identity = $('#identity').val(),
      birthday = $('#birthday').val(),
      name = $('#name').val();

    // 前端数据校验
    if (!house || !sex || !nation || !phone || !identity || !name) {
      return showFailDialog('请填写带星号的必填项目');
    }

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

  // 编辑按钮事件
  $('#btn-edit').click(function () {
    var id = window.location.hash.substr(1),
      house = $house.val(),
      sex = $('#sex').val(),
      nation = $('#nation').val(),
      education = $('#education').val(),
      work = $('#work').val(),
      company = $('#company').val(),
      phone = $('#phone').val(),
      identity = $('#identity').val(),
      birthday = $('#birthday').val(),
      name = $('#name').val();

    // 前端数据校验
    if (!house || !sex || !nation || !phone || !identity || !name) {
      return showFailDialog('请填写带星号的必填项目');
    }

    // AJAX 请求更新
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

  // 人员编辑页面的详情方法
  function detail() {
    var id = window.location.hash.substr(1);

    $.ajax({
      url: '/persons/' + id,
      type: 'GET',
      success: function (result) {
        var data = result.data,
          birthday = moment(data.birthday).format("YYYY-MM-DD"), // 利用moment对时间进行格式化
          $option = $('<option selected>' + data.house.detailAdd + '</option>')
            .val(data.house.id); // 加载详情页面的住房选项

        $house.append($option).trigger('change');
        $('#name').val(data.name);
        $('#nation').val(data.nation);
        $('#work').val(data.work);
        $('#company').val(data.company);
        $('#phone').val(data.phone);
        $('#identity').val(data.identity);
        $('#birthday').val(birthday);
        $('#sex').val(data.sex).trigger('change');
        $('#education').val(data.education).trigger('change');
        $('#btn-create').addClass('hidden');
        $('#btn-edit').removeClass('hidden');

      }
    })
  }

  if (window.location.hash) { // 判断是编辑页面还是创建页面
    detail();
  }

})
;

