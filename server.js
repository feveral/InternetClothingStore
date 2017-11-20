const express = require('express');
const http = require('http');
const mysql = require('mysql');
const WebServer = require('./server/WebServer.js')
const ProductServer = require('./server/ProductServer.js')

var db = mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "timmy880925",
  	database: "Shtick"
});

var app = express();
var apiServer = http.createServer(app);

new WebServer(__dirname);
new ProductServer(app,db);

apiServer.listen(8080);

