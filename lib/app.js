'use strict';

var express = require('express');

var middleware = require('./middleware');

var app = express();

app.use(middleware.replyWith404);

module.exports = app;
