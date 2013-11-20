'use strict';

var fs = require('fs'),
    path = require('path'),
    zlib = require('zlib');

var startsWith = require('../string').startsWith;

var deliverDownload = function (root) {
  return function (req, res, next) {
    if (!startsWith(req.url, '/download/')) {
      return next();
    }

    var requestedPath = path.join(root, req.url);

    fs.exists(requestedPath, function (exists) {
      if (!exists) {
        return next();
      }

      var readStream = fs.createReadStream(requestedPath);

      res.writeHead(200, {
        'content-type': 'application/x-gzip',
        'content-disposition': 'attachment; filename=' + path.basename(requestedPath) + '.zip'
      });
      readStream.pipe(zlib.createGzip()).pipe(res);
    });
  };
};

module.exports = deliverDownload;
