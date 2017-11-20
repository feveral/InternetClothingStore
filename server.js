const express = require('express');
const http = require('http');
const WebServer = require('./server/WebServer.js')
const ProductServer = require('./server/ProductServer.js')
const DatabaseUtility = require('./database/DatabaseUtility.js')

var app = express();
var apiServer = http.createServer(app);

new WebServer(__dirname);
new ProductServer(app,DatabaseUtility.Getdb());

apiServer.listen(8080);

