'use strict';

var replyWith404 = function () {
  return function (req, res) {
    res.send(404);
  };
};

module.exports = replyWith404;
