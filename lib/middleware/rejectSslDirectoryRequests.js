'use strict';

var startsWith = require('../string').startsWith;

var rejectSslDirectoryRequests = function () {
  return function (req, res, next) {
    if (req.url === '/ssl' || startsWith(req.url, '/ssl/')) {
      return res.send(403);
    }

    next();
  };
};

module.exports = rejectSslDirectoryRequests;
