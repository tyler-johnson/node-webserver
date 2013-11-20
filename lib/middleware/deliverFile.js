'use strict';

var fs = require('fs'),
    path = require('path');

var mime = require('mime');

var deliverFile = function (root) {
  return function (req, res, next) {
    var requestedPath = path.join(root, req.url);

    fs.exists(requestedPath, function (exists) {
      if (!exists) {
        return next();
      }

      var mimeType = mime.lookup(requestedPath),
          readStream = fs.createReadStream(requestedPath);

      res.writeHead(200, {
        'content-type': mimeType
      });
      readStream.pipe(res);
    });
  };
};

module.exports = deliverFile;
