module.exports.policies = {

  // 接口策略过滤,策略在api/policies中
  '*': 'sessionAuth',
  AuthController: {
    '*': true,
    change: 'sessionAuth',
    changePage: 'sessionAuth'
  },
  HomeController: {
    '*': 'sessionAuth'
  },
  ElecController: {
    clear: ['sessionAuth', 'isAdmin']
  },
  HouseController: {
    '*': ['sessionAuth', 'isAdmin'],
    list: 'sessionAuth'
  },
  PersonController: {
    '*': 'sessionAuth',
    delete: ['sessionAuth', 'isAdmin']
  },
  PropertyController: {
    '*': 'sessionAuth',
    clear: ['sessionAuth', 'isAdmin']
  }
};
