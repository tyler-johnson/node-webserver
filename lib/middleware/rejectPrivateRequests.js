'use strict';

var rejectPrivateRequests = function () {
  return function (req, res, next) {
    var partials = req.url.split('/');

    for (var i = 0; i < partials.length; i++) {
      var firstCharacter = partials[i][0];

      if (firstCharacter === '.' || firstCharacter === '_') {
        return res.send(403);
      }
    }

    next();
  };
};

module.exports = rejectPrivateRequests;
