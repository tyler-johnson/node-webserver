# node-webserver

node-webserver is a lightweight web server that supports http(s), downloads and various template engines.

This project was created for a *Node.js vs .NET* contest in [dotnetpro](http://www.dotnetpro.de/) 02.2014. For any details on the contest please see this edition.

If you have any questions or feedback, feel free to contact me using [@goloroden](https://twitter.com/goloroden) on Twitter.

## Installation

    $ sudo npm install -g node-webserver

## Quick Start

Once you have installed node-webserver you can run it from anywhere by using the

    $ webserver

command. This serves the current directory using the `http` protocol. By default, port `3000` is used. If you want to change the port, use the `--port` parameter:

    $ webserver --port 5000

### Enabling https

If you would like to serve a directory using `https` instead of `http`, all you need to do is to provide a `ssl` directory that includes the private key and the certificate. You have to use the `privateKey.pem` and `certificate.pem` as file names.

### Serving data

The server protects you from breaking out of the initial directory using `..` or similar terms in request urls. Additionally, if directories or files start with a `.` or `_` character, they are considered private and will not be served. The same is true for the `ssl` directory, if present.

For any file, node-webserver tries to detect the correct mime type and return it to the client.

### Handling default files

If an incoming request does only refer to a directory, not to a file, the file name `index.html` is used as default. If no such file exists, a `404` is returned.

### Handling special files

Finally, there are some specialties for a few file types:

- `.js` files are minified before being served.
- `.css` files are minified as well, `.styl` files are converted to CSS and minified, too.
- `.ejs` files are converted to HTML.

If you have a `download` directory, all its content is automatically served as `.gzip` and offered for download.

## Running the tests

Due to the given demands of the contest, currently there are no tests.

This module can be built using [Grunt](http://gruntjs.com/). To run Grunt, go to the folder where you have installed node-webserver and run `grunt`. You need to have [grunt-cli](https://github.com/gruntjs/grunt-cli) installed.

    $ grunt

## License

The MIT License (MIT)
Copyright (c) 2013 Golo Roden.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
