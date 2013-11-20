'use strict';

var path = require('path');

var startsWith = require('../startsWith');

var jailRequest = function (root) {
  return function (req, res, next) {
    var requestedPath = path.join(root, req.url);

    if (!startsWith(requestedPath, root)) {
      return res.send(403);
    }

    next();
  };
};

module.exports = jailRequest;
