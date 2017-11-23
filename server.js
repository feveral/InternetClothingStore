const express = require('express');
const http = require('http');
const WebServer = require('./server/WebServer.js');
const ProductServer = require('./server/ProductServer.js');
const MemberServer = require('./server/MemberServer.js');
const DatabaseUtility = require('./database/DatabaseUtility.js');

var app = express();
var apiServer = http.createServer(app);
var router = express.Router();

new WebServer(__dirname);
new ProductServer(app,router);
new MemberServer(app);

app.use('/product', router);
apiServer.listen(8080);

