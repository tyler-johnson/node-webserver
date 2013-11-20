'use strict';

var express = require('express');

var middleware = require('./middleware');

var app = {
  create: function (root) {
    var app = express();

    app.use(middleware.jailRequest(root));
    app.use(middleware.rejectPrivateRequests());
    app.use(middleware.rejectSslDirectoryRequests());

    app.use(middleware.enableDefaultFile(root));
    app.use(middleware.deliverDownload(root));
    app.use(middleware.deliverStylesheet(root));
    app.use(middleware.deliverFile(root));
    app.use(middleware.replyWith404());

    return app;
  }
};

module.exports = app;
