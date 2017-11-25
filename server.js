const express = require('express');
const http = require('http');
const WebServer = require('./server/WebServer.js');
const ProductServer = require('./server/ProductServer.js');
const MemberServer = require('./server/MemberServer.js');
const LoginServer = require('./server/LoginServer.js');

const DatabaseUtility = require('./database/DatabaseUtility.js');

var app = express();
var apiServer = http.createServer(app);
var productRouter = express.Router();
var loginRouter = express.Router();

new ProductServer(productRouter);
new LoginServer(app,loginRouter);

app.use('/login', loginRouter);
app.use('/product', productRouter);
app.use(express.static('public'));


app.listen(80);

