module.exports.policies = {

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
