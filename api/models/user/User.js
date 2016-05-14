module.exports = {
  group: 'user',
  globalId: 'User',
  tableName: 'user',
  attributes: {
    username: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    isAdmin: {
      type: 'boolean'
    }
  }
};
