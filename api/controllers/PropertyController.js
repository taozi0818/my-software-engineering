import then from 'thenjs';

const PAGE_NUM = 20;

module.exports = {
  list: function (req, res, next) {
    let status = req.query.status,
      page = req.query.page || 1,
      skipNum = (page - 1)*PAGE_NUM,
      query = {where: {}, skip: skipNum, limit: PAGE_NUM},
      totalCount = 0;

    if (status) {
      query.where.status = status;
    }

    then(function (defer) {

      Property.count(defer, query.where);
    }).then(function (defer, count) {

      totalCount = count;
      Property.find(query)
        .populate('house')
        .exec(defer);
    }).then(function (defer, Data) {

      return res.pagination(page, totalCount, Data);
    }).fail(function (defer, err) {

      return next(err);
    })
  },
  clear: function (req, res, next) { // 用户缴费之后清零并且将状态置为开启状态
    let id = req.params.id;

    then(function (defer) {

      Property.update({id: id}, {status: 'ENABLE', expense: 0}, defer);
    }).then(function (defer, data) {

      return res.success(data);
    }).fail(function (defer, err) {

      return next(err);
    })
  },
  update: function (req, res, next) {
    let id = req.params.id,
      status = req.body.status;

    then(function (defer) {

      Property.update({id: id}, {status: status}, defer);
    }).then(function (defer, data) {

      return res.success(data);
    }).fail(function (defer, err) {

      return next(err);
    })
  },
  listPage: function (req, res) {
    res.render('property/property-list.ejs');
  }
};
