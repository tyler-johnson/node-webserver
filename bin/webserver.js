#!/usr/bin/env node

'use strict';

var server = require('../lib/server');

var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --port <port>', 'specifies the port [3000]', Number, 3000)
  .parse(process.argv);

server.create(process.cwd(), program.port).run();
