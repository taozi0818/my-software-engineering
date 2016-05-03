module.exports = function(req, res, next) {

  res.renderLayout = function(view, options, fn) {
    options = options || {};
    // todo session.user
    //options.user = req.session.user;
    res.render(view, options, fn);
  };

  next();
};
