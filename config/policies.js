module.exports.policies = {
  HomeController:{
    homePage: 'sessionAuth'
  },
  PersonController:{
    list: 'sessionAuth'
  }
};
