module.exports = {
  group: 'user',
  globalId: 'User',
  tableName: 'user',
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string'
    },
    role: { // 对应RBAC中的角色
      model: 'Role'
    },
    house: { // 用于与住房的关联
      model: 'House'
    }
  }
};
