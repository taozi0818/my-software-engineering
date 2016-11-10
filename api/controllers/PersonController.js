import then from 'thenjs';
import _ from 'lodash';

const PAGE_NUM = 10;

module.exports = {
  findOne: function (req, res) { // 个人详情,编辑页面加载数据
    let id = req.params.id;

    then(function (defer) {

      Person.findOne({id: id})
        .populate('house')
        .exec(defer);
    }).then(function (defer, Data) {

      return res.success(Data);
    }).fail(function (defer, err) {

      return res.error(err);
    })
  },
  list: function (req, res) {
    let page = req.query.page || 1,
      name = req.query.name,
      house = req.query.house,
      skipNum = (page - 1) * PAGE_NUM,
      query = {where: {}, skip: skipNum, limit: PAGE_NUM},
      totalCount = 0;

    if (name) {
      query.where.name = {like: `%${name}%`}
    }

    if (house) {
      query.where.house = house;
    }

    then(function (defer) {

      Person.count(query.where, defer);
    }).then(function (defer, count) {

      totalCount = count;
      Person.find(query)
        .populate('house')
        .exec(defer);
    }).then(function (defer, personList) {

      return res.pagination(page, totalCount, personList);
    }).fail(function (defer, err) {

      return res.error(err);
    });
  },
  create: function (req, res) {
    let personData = _.pick(req.body, ['name', 'sex', 'nation', 'education', 'work',
      'company', 'phone', 'identity', 'birthday', 'house']);

    then(function (defer) {

      Person.create(personData, defer);
    }).then(function (defer, personInfo) {

      return res.success(personInfo);
    }).fail(function (defer, err) {

      return res.error(err);
    })
  },
  update: function (req, res, next) {
    let id = req.params.id,
      personData = _.pick(req.body, ['name', 'sex', 'nation', 'education', 'work',
        'company', 'phone', 'identity', 'birthday', 'house']);

    then(function (defer) {

      Person.update(id, personData, defer);
    }).then(function (defer, personInfo) {

      return res.success(personInfo);
    }).fail(function (defer, err) {

      return next(err);
    });
  },
  delete: function (req, res, next) {
    let id = req.params.id;

    then(function (defer) {

      Person.destroy({id: id}, defer);
    }).then(function (defer, data) {

      return res.success(data);
    }).fail(function (defer, err) {

      return next(err);
    })
  },
  formPage: function (req, res) {
    res.render('person/person-form.ejs');
  },
  listPage: function (req, res) {
    res.render('person/person-list.ejs');
  }
};
