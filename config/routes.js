module.exports.routes = {

  // 授权
  'GET /login': 'Auth.loginPage', // 登陆页面
  'POST /login': 'Auth.login', // 验证登陆逻辑
  'GET /logout': 'Auth.logout', // 登出
  'PUT /password': 'Auth.change', // 修改密码
  'GET /password/page': 'Auth.changePage', // 修改密码页面

  'GET /': 'Home.homePage', //
  'GET /home': 'Home.homePage', // 主页
  // 人员相关
  'GET /persons/list/page': 'Person.listPage', // 小区人员列表页面
  'GET /persons/form/page': 'Person.formPage', // 新建人员页面
  'GET /persons': 'Person.list', // 小区人员列表
  'POST /persons': 'Person.create', // 新建小区人员
  'DELETE /persons/:id': 'Person.delete', // 删除小区人员
  'PUT /persons/:id': 'Person.update', // 个人信息更新
  'GET /persons/:id': 'Person.findOne', // 个人信息

  // 住房相关
  'GET /house': 'House.list', // 住房列表
  'GET /house/:id': 'House.detail', // 住房详情
  'PUT /house/:id': 'House.change', // 更改住房拥有者
  'GET /house/list/page': 'House.listPage', // 住房列表页面
  'GET /house/form/page': 'House.formPage', // 住房编辑页面

  // 物业费相关
  'GET /property': 'Property.list', // 按条件查询物业费相关列表
  'GET /property/list/page': 'Property.listPage', // 物业费列表页面
  'PUT /property/clear/:id': 'Property.clear', // 清空物业费欠费并且将状态置为可用状态
  'PUT /property/:id': 'Property.update', // 物业费管理

  // 水电费相关
  'GET /elec': 'Elec.list', // 按条件查询水电费相关列表
  'GET /elec/list/page': 'Elec.listPage', // 水电费管理列表页面
  'PUT /elec/:id': 'Elec.update', // 水电费管理
  'PUT /elec/clear/:id': 'Elec.clear' // 清空欠费并且将状态置为可用状态
};
