module.exports.policies = {

  AuthController: {
    '*': true
  },
  HomeController: {
    '*': 'sessionAuth'
  },
  ElecController: {
    '*': 'sessionAuth'
  },
  HouseController: {
    '*': 'sessionAuth'
  },
  PersonController: {
    '*': 'sessionAuth'
  },
  PropertyController: {
    '*': 'sessionAuth'
  }
};
