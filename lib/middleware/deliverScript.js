'use strict';

var fs = require('fs'),
    path = require('path');

var uglify = require('uglify-js');

var endsWith = require('../string').endsWith;

var deliverScript = function (root) {
  return function (req, res, next) {
    var requestedPath = path.join(root, req.url),
        requestedPathLower = requestedPath.toLowerCase();

    if (!endsWith(requestedPathLower, '.js')) {
      return next();
    }

    fs.exists(requestedPath, function (exists) {
      if (!exists) {
        return next();
      }

      var script = uglify.minify(requestedPath);

      res.writeHead(200, {
        'content-type': 'text/javascript'
      });
      res.end(script.code);
    });
  };
};

module.exports = deliverScript;
