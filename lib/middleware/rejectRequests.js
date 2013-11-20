'use strict';

var rejectRequests = function (pattern) {
  return function (req, res, next) {
    if (pattern.test(req.url)) {
      return res.send(403);
    }

    next();
  };
};

module.exports = rejectRequests;
