'use strict';

var fs = require('fs'),
    path = require('path');

var deliverFile = function (root) {
  return function (req, res, next) {
    var requestedPath = path.join(root, req.url);

    fs.exists(requestedPath, function (exists) {
      if (!exists) {
        return next();
      }

      var readStream = fs.createReadStream(requestedPath);
      readStream.pipe(res);
    });
  };
};

module.exports = deliverFile;
