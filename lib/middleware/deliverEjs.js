'use strict';

var fs = require('fs'),
    path = require('path');

var ejs = require('ejs');

var endsWith = require('../string').endsWith;

var deliverEjs = function (root) {
  return function (req, res, next) {
    var requestedPath = path.join(root, req.url),
        requestedPathLower = requestedPath.toLowerCase();

    if (!endsWith(requestedPathLower, '.ejs')) {
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

        var html = ejs.render(data, {});

        res.writeHead(200, {
          'content-type': 'text/html'
        });
        res.end(html);
      });
    });
  };
};

module.exports = deliverEjs;
