'use strict';

var fs = require('fs'),
    path = require('path');

var enableDefaultFile = function (root) {
  return function (req, res, next) {
    var requestedPath = path.join(root, req.url);

    fs.stat(requestedPath, function (err, stats) {
      if (err) {
        return next();
      }

      if (stats.isDirectory()) {
        req.url = (req.url + '/index.html').replace('//', '/');
      }

      next();
    });
  };
};

module.exports = enableDefaultFile;
