$(function () {

  var dialog = new BootstrapDialog({
      closable: false,
      closeByBackdrop: false,
      closeByKeyboard: false,
      message: $('<i class="fa fa-spinner fa-spin fa-2x"></i><span>加载中...</span>')
    }),
    currentPath = window.location.pathname,
    currentNode = $('.sidebar-menu a[href="' + currentPath + '"]'),
    currentMenu = currentNode.parent(),
    currentMenuParent = currentMenu.parent().parent();

  dialog.realize();
  dialog.getModalHeader().hide();
  dialog.getModalFooter().hide();

  // 全局ajax事件监听
  $(document).ajaxStart(function () {
    dialog.open();
  });

  $(document).ajaxComplete(function (event, xhr) {

    var status = xhr.status;

    dialog.close();

    if (status === 401) {
      location.replace('/auth/page');
    } else if (status !== 200) {
      BootstrapDialog.show({
        title: '失败',
        message: $('<i class="fa fa-warning fa-2x"></i><span>操作失败</span>'),
        closable: true,
        closeByBackdrop: false,
        closeByKeyboard: false,
        type: BootstrapDialog.TYPE_DANGER,
        buttons: [
          {
            label: '关闭',
            action: function (dialogRef) {
              dialogRef.close();
            }
          }
        ]
      });
    }
  });

  // 选中当前页面所在的菜单节点
  currentMenu.addClass('active');

  if (currentMenuParent.attr('class') === 'treeview') {
    currentMenuParent.addClass('active');
  }
});

function showSuccessDialog(msg) {

  var message = $('<i class="fa fa-check-circle fa-2x"></i><span>操作已完成</span>');

  if (msg) {

    message = $('<i class="fa fa-check-circle fa-2x"></i><span>' + msg + '</span>');
  }

  BootstrapDialog.show({
    title: '成功',
    message: message,
    closable: true,
    closeByBackdrop: false,
    closeByKeyboard: false,
    type: BootstrapDialog.TYPE_SUCCESS,
    buttons: [
      {
        label: '关闭',
        action: function (dialogRef) {
          dialogRef.close();
        }
      }
    ]
  });
}

function showFailDialog(msg) {

  var message = $('<i class="fa fa-exclamation-circle fa-2x"></i><span>操作失败</span>');

  if (msg) {

    message = $('<i class="fa fa-exclamation-circle fa-2x"></i><span>' + msg + '</span>');
  }

  BootstrapDialog.show({
    title: '失败',
    message: message,
    closable: true,
    closeByBackdrop: false,
    closeByKeyboard: false,
    type: BootstrapDialog.TYPE_DANGER,
    buttons: [
      {
        label: '关闭',
        action: function (dialogRef) {
          dialogRef.close();
        }
      }
    ]
  });
}
