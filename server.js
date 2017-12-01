const express = require('express');
const http = require('http');
const ProductServer = require('./server/ProductServer.js');
const MemberServer = require('./server/MemberServer.js');
const LoginServer = require('./server/LoginServer.js');

const DatabaseUtility = require('./database/DatabaseUtility.js');

var app = express();
var productRouter = express.Router();
var loginRouter = express.Router();

new ProductServer(productRouter);
new LoginServer(app,loginRouter);

app.use('/login', loginRouter);
app.use('/product', productRouter);
app.use(express.static('public'));

app.listen(80);

const MemberManager = require('./server/MemberManager.js');
m = new MemberManager();
// m.IsSignInCorrect('joh860829nny@gmail.com','AA5566',function(err,result){
// 	console.log(result);
// });