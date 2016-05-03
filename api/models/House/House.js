module.exports = {
  group: 'house',
  globalId: 'House',
  tableName: 'house',
  attributes: {
    detailAdd: {
      type: 'string',
      required: true
    },
    owner: {
      model: 'Person'
    },
    elecStatus: {
      model: 'Elec'
    },
    proStatus: {
      model: 'Property'
    },
    persons: {
      collection: 'person',
      via: 'house'
    }
  }
};
