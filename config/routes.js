module.exports.routes = {

  // 授权
  'GET /login': 'auth/Auth.loginPage', // 登陆页面
  'POST /login': 'auth/Auth.login', // 验证登陆逻辑
  'GET /logout': 'auth/Auth.logout', // 登出

  'GET /': 'home/Home.homePage', //
  'GET /home': 'home/Home.homePage', // 主页
  // 人员相关
  'GET /persons/list/page': 'person/Person.listPage', // 小区人员列表页面
  'GET /persons/form/page': 'person/Person.formPage', // 新建人员页面
  'GET /persons': 'person/Person.list', // 小区人员列表
  'POST /persons': 'person/Person.create', // 新建小区人员
  'DELETE /persons/:id': 'person/Person.delete', // 删除小区人员
  'PUT /persons/:id': 'person/Person.update', // 个人信息更新
  'GET /persons/:id': 'person/Person.findOne', // 个人信息

  // 住房相关
  'GET /house': 'house/House.list', // 住房列表
  'GET /house/:id': 'house/House.detail', // 住房详情
  'PUT /house/:id': 'house/House.change', // 更改住房拥有者
  'GET /house/list/page': 'house/House.listPage', // 住房列表页面
  'GET /house/form/page': 'house/House.formPage', // 住房编辑页面

  // 物业费相关
  'GET /property': 'property/Property.list', // 按条件查询物业费相关列表
  'GET /property/list/page': 'property/Property.listPage', // 物业费列表页面
  'PUT /property/clear/:id': 'property/Property.clear', // 清空物业费欠费并且将状态置为可用状态
  'PUT /property/:id': 'property/Property.update', // 物业费管理

  // 水电费相关
  'GET /elec': 'elec/Elec.list', // 按条件查询水电费相关列表
  'GET /elec/list/page': 'elec/Elec.listPage', // 水电费管理列表页面
  'PUT /elec/:id': 'elec/Elec.update', // 水电费管理
  'PUT /elec/clear/:id': 'elec/Elec.clear' // 清空欠费并且将状态置为可用状态
};
