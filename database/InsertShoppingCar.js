'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ShoppingCarManager = require('../server/ShoppingCarManager.js');
var shoppingCarManager = new ShoppingCarManager(DatabaseUtility.Getdb());

shoppingCarManager.AddShoppingCar(
	{
		ProductId:1,
		MemberId:104820004,
		Quantity:1
	},
	DatabaseUtility.callback
);