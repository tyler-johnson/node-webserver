'use strict';

var fs = require('fs'),
    path = require('path');

var endsWith = require('../string').endsWith;

var deliverStylesheet = function (root) {
  return function (req, res, next) {
    var requestedPath = path.join(root, req.url),
        requestedPathLower = requestedPath.toLowerCase();

    if (!endsWith(requestedPathLower, '.css')) {
      return next();
    }

    fs.exists(requestedPath, function (exists) {
      if (!exists) {
        return next();
      }

      fs.readFile(requestedPath, { encoding: 'utf8' }, function (err, data) {
        if (err) {
          return res.send(500);
        }

        res.writeHead(200, {
          'content-type': 'text/css'
        });
        res.end(data);
      });
    });
  };
};

module.exports = deliverStylesheet;
