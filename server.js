const express = require('express');
const http = require('http');
const ProductServer = require('./server/ProductServer.js');
const MemberServer = require('./server/MemberServer.js');
const LoginServer = require('./server/LoginServer.js');
const OrderListServer = require('./server/OrderListServer.js');
const ShoppingCarServer = require('./server/ShoppingCarServer.js');
const DatabaseUtility = require('./database/DatabaseUtility.js');

var app = express();
var productRouter = express.Router();
var loginRouter = express.Router();
var MemberRouter = express.Router();
var OrderListRouter = express.Router();
var ShoppingCarRouter = express.Router();

new ProductServer(productRouter);
new LoginServer(app,loginRouter);
new MemberServer(MemberRouter);
new OrderListServer(OrderListRouter);
new ShoppingCarServer(ShoppingCarRouter);

app.use('/login', loginRouter);
app.use('/product', productRouter);
app.use('/member', MemberRouter);
app.use('/orderList', OrderListRouter);
app.use('/shoppingCar', ShoppingCarRouter);
app.use(express.static('public'));

app.listen(80);
