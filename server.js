const express = require('express');
const http = require('http');
const ProductServer = require('./server/ProductServer.js');
const MemberServer = require('./server/MemberServer.js');
const LoginServer = require('./server/LoginServer.js');
const ShoppingCarServer = require('./server/ShoppingCarServer.js');
const RegisterServer = require('./server/MemberServer.js');
const OrderListServer = require('./server/OrderListServer.js');
const DatabaseUtility = require('./database/DatabaseUtility.js');
const FavoriteServer = require('./server/FavoriteServer.js')

var app = express();
var productRouter = express.Router();
var loginRouter = express.Router();
var MemberRouter = express.Router();
var OrderListRouter = express.Router();
var ShoppingCarRouter = express.Router();
var FavoriteRouter = express.Router();

new ProductServer(productRouter);
new LoginServer(app,loginRouter);
new MemberServer(MemberRouter);
new OrderListServer(OrderListRouter);
new ShoppingCarServer(ShoppingCarRouter);
new FavoriteServer(FavoriteRouter);

app.use('/login', loginRouter);
app.use('/product', productRouter);
app.use('/member', MemberRouter);
app.use('/shoppingCar', ShoppingCarRouter);
app.use('/order', OrderListRouter);
app.use('/favorite', FavoriteRouter);
app.use(express.static('public'));

app.listen(80);


const OnsaleManager = require('./server/OnsaleManager.js');
new OnsaleManager();
