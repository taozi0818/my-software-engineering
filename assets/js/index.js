$(function () {

  var username = sessionStorage.getItem('user'),
    role = sessionStorage.getItem('role');
  
  $('#navbar-user').click(function () {

    var $li = $(this).children().first(),
      $a = $li.find('.dropdown-toggle');

    if ($li.attr('class').indexOf('open') == -1) {
      $li.addClass('open');
      $a.attr('aria-expanded', true);
    } else {
      $li.removeClass('open');
      $a.attr('aria-expanded', false);
    }
  });

  function initAdmin() {
    var $li = [
        '<li class="treeview">',
        '<a href="#">',
        '<i class="fa fa-home"></i>',
        '<span>&nbsp;住房管理</span>',
        '<i class="fa fa-angle-left pull-right"></i>',
        '</a>',
        '<ul class="treeview-menu">',
        '<li><a href="/house/list/page"><i class="fa fa-circle-o"></i>房屋列表</a></li>',
        '</ul>',
        '</li>'
      ],
      $user = [
        '<li class="treeciew">',
        '<a href="#">',
        '<i class="fa fa-users"></i><span>&nbsp;用户管理</span>',
        '<i class="fa fa-angle-left pull-right"></i>',
        '</a>',
        '<ul class="treeview-menu">',
        '<li>',
        '<a href="/admin/users/page"><i class="fa fa-circle-o"></i>用户列表</a>',
        '</li>',
        '</li>'
      ];

    $('#view-dashboard').after($li.join(''));
    $('#treeview-menu').append($user.join('')); 
  }

  if (role === 'admin') {
    initAdmin();
  }
  
  $('#username').append(username);
  
});
