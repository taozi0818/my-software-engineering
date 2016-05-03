module.exports = {
  group: 'property',
  globalId: 'Property',
  tableName: 'property',
  attributes: {
    detailAdd :{
      type: 'string',
      required: true
    },
    expense: {
      type: 'float',
      defaultsTo: 0
    },
    status: {
      type: 'boolean',
      defaultsTo: true
    }
  }
};
