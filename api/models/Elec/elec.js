module.exports = {
  group: 'Elec',
  globalId: 'Elec',
  tableName: 'elec',
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
