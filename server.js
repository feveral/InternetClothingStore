const express = require('express');
const http = require('http');
const ProductServer = require('./server/ProductServer.js');
const MemberServer = require('./server/MemberServer.js');
const LoginServer = require('./server/LoginServer.js');
const RegisterServer = require('./server/RegisterServer.js');


const DatabaseUtility = require('./database/DatabaseUtility.js');

var app = express();
var productRouter = express.Router();
var loginRouter = express.Router();
var registerRouter = express.Router();

new ProductServer(productRouter);
new LoginServer(app,loginRouter);
new RegisterServer(registerRouter);

app.use('/login', loginRouter);
app.use('/product', productRouter);
app.use('/register', registerRouter);
app.use(express.static('public'));

app.listen(80);
