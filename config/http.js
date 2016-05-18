module.exports.http = {
  middleware: {
    order: [
      'startRequestTimer',
      'cookieParser',
      'session',
      'myRequestLogger',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      'poweredBy',
      '$custom',
      'router',
      'www',
      'favicon',
      '404',
      '500'
    ],
    myRequestLogger: function (req, res, next) {
      sails.log.info('Request:', req.url, req.method, req.session.user); // 日志
      return next();
    }
  }
};
