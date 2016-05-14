import then from 'thenjs';

const PAGE_NUM = 20;

module.exports = {
  list: function (req, res, next) {
    let owner = req.query.owner,
      detailAdd = req.query.detailAdd,
      page = req.query.page || 1,
      skipNum = (page - 1)*PAGE_NUM,
      query = {where: {}, skip: skipNum, limit: PAGE_NUM},
      totalCount = 0;

    if (detailAdd) {
      query.where.detailAdd = {like: `%${detailAdd}%`};
    }

    if (owner) {
      query.where.owner = owner;
    }

   then(function (defer) {

     House.count(defer, query.where);
   }).then(function (defer, count) {

     totalCount = count;
     House.find(query)
       .populate('owner')
       .populate('persons')
       .exec(defer);
   }).then(function (defer, Data) {

     return res.pagination(page, totalCount, Data);
   }).fail(function (defer, err) {

     return next(err);
   })
  },
  change: function(req, res, next) {
    let owner = req.body.owner,
      id = req.params.id;

    then(function (defer) {

      House.update({id: id}, {owner: owner}, defer);
    }).then(function (defer, Data) {

      return res.success(Data);
    }).fail(function (defer, err) {

      return next(err);
    })
  },
  detail: function (req, res) {
    let id = req.params.id;

    then(function (defer) {

      House.findOne({id: id})
        .populate('owner')
        .exec(defer);
    }).then(function (defer, data) {

      return res.success(data);
    }).fail(function (defer, err) {

      return res.error(err);
    })
  },
  listPage: function (req, res) {
    res.render('house/house-list.ejs');
  },
  formPage: function (req, res) {
    res.render('house/house-form.ejs');
  }
};
