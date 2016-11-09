/**
 * RBAC访问控制中的Role
 * 因为系统业务不多,所以权限方面只是简单设计
 * 可根据日后业务增加,完善设计
 * */
module.exports = {
  group: 'user',
  tableName: 'role',
  globalId: 'Role',
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    permissions: {
      type: 'string',
      required: true
    }
  }
};
