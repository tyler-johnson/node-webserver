'use strict';

var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    path = require('path');

var app = require('./app');

var server = {
  create: function (root, port) {
    return {
      paths: {
        ssl: path.join(root, 'ssl'),
        privateKey: path.join(root, 'ssl', 'privateKey.pem'),
        certificate: path.join(root, 'ssl', 'certificate.pem')
      },

      run: function () {
        if (!this.requiresSsl()) {
          this.runHttpServer();
        } else {
          this.createHttpsServer();
        }
      },

      requiresSsl: function () {
        var hasSslDirectory = fs.existsSync(this.paths.ssl),
            hasPrivateKey = fs.existsSync(this.paths.privateKey),
            hasCertificate = fs.existsSync(this.paths.certificate);

        return hasSslDirectory && hasPrivateKey && hasCertificate;
      },

      runHttpServer: function () {
        http.createServer(app.create(root)).listen(port, function () {
          console.log('http server listening on port ' + port + '...');
        });
      },

      createHttpsServer: function () {
        var privateKey = fs.readFileSync(this.paths.privateKey),
            certificate = fs.readFileSync(this.paths.certificate);

        https.createServer({
          key: privateKey,
          cert: certificate
        }, app.create(root)).listen(port, function () {
          console.log('https server listening on port ' + port + '...');
        });
      }
    };
  }
};

module.exports = server;
