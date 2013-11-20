'use strict';

var path = require('path');

var startsWith = function (haystack, needle) {
  return haystack.slice(0, needle.length) === needle;
};

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
