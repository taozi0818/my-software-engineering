import then from 'thenjs';
import crypto from 'crypto';

const PAGE_NUM = 20;

module.exports = {
  listPage: function (req, res) {
     res.render('admin/list.ejs');
  },
  list: function (req, res, next) {
    let page = req.query.page || 1,
      skip = (page -1) * PAGE_NUM,
      query = {where: {}, skip: skip, limit: PAGE_NUM},
      totalCount = 0;

    
    then(function (defer) {
      
      User.count(query, defer)
    }).then(function (defer, count) {
      totalCount = count;
      User.find(query.where)
        .populate('house')
        .exec(defer);

    }).then(function (defer, list) {

      return res.pagination(page, totalCount, list);
    }).fail(function (defer, err) {

      return next(err);
    });
  },
  reset: function (req, res, next) {
    let username = req.body.username,
      password = crypto.createHash('md5').update('123456').digest('hex');

    then(function (defer) {
      User.update({username: username}, {password: password}, defer);
    }).then(function () {

      return res.success();
    }).fail(function (defer, err) {

      return next(err);
    });
  },
  add: function (req, res, next) {
    let username = req.body.username,
      password = crypto.createHash('md5').update('123456').digest('hex'),
      role = req.body.role,
      house = req.body.house || null;

    then(function (defer) {

      User.findOne({house: house}, defer);
    }).then(function (defer, user) {

      if (user) {
        return res.success('BINDED');
      }

      User.create({
        username: username,
        password: password,
        role: role,
        house: house
      }, defer);
    }).then(function () {

      return res.success();
    }).then(function (defer, err) {

      return next(err);
    });
  }
};
