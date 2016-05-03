module.exports = function error(err, options) {
  var res = this.res;

  if (err) {
    sails.log(err);
    res.badRequest(err, options);
  } else {
    sails.log(err);
    res.serverError(err, options);
  }
};
