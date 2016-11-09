$(function () {

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
});
