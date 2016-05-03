import then from 'thenjs';

module.exports = {
  update: function (req, res, next) {
    let id = req.params.id,
      status = req.body.status,
      expense = req.body.expense;

    then(function (defer) {

      Elec.update({id: id}, {status: status, expense: expense}, defer);
    }).then(function (defer, data) {

      return res.success(data);
    }).fail(function (defer, err) {

      return next(err);
    })
  }
};
