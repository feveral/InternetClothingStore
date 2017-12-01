'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var OrderItemManager = require('../server/OrderItemManager.js');
var orderItemManager = new OrderItemManager(DatabaseUtility.Getdb());

orderItemManager.AddOrderItem(
	{
		ProductId:1,
		OrderId:1,
		Quantity:1
	},
	DatabaseUtility.callback
);