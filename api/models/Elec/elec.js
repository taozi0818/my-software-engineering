module.exports = {
  group: 'Elec',
  globalId: 'Elec',
  tableName: 'elec',
  attributes: {
    house :{
      model: 'House',
      required: true
    },
    expense: {
      type: 'float',
      defaultsTo: 0
    },
    status: {
      type: 'string',
      enum: ['ENABLE', 'DISABLE'],
      defaultsTo:'ENABLE'
    }
  }
};
