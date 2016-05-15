module.exports = {
  group: 'Person',
  globalId: 'Person',
  tableName: 'person',
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    sex: {
      type: 'string',
      required: true
    },
    nation: {
      type: 'string',
      required: true
    },
    education: {
      type: 'string'
    },
    work: {
      type: 'string'
    },
    company: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    identity: {
      type: 'string',
      unique: true,
      required: true
    },
    birthday: {
      type: 'date'
    },
    house: {
      model: 'House'
    }
  }
};
