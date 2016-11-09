module.exports = function error(err, options) {
  var res = this.res,
    error = EService.BaseError;

  if (err && err instanceof EService.BaseError) {
    err.message = sails.__({
      phrase: err.message,
      locale: 'cn'
    });
    sails.log(err);
    res.badRequest(err, options);
  } else {
    sails.log(err);
    res.serverError(err, options);
  }
};
