module.exports = {
  group: 'property',
  globalId: 'Property',
  tableName: 'property',
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
      defaultsTo: 'ENABLE'
    }
  }
};
