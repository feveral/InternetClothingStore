'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ShoppingCarManager = require('../server/ShoppingCarManager.js');
var shoppingCarManager = new ShoppingCarManager(DatabaseUtility.Getdb());

shoppingCarManager.AddShoppingCar(
	{
		ProductId:1,
		MemberId:1,
		Quantity:5
	},
	DatabaseUtility.callback
);