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

orderItemManager.AddOrderItem(
	{
		ProductId:2,
		OrderId:2,
		Quantity:1
	},
	DatabaseUtility.callback
);

orderItemManager.AddOrderItem(
	{
		ProductId:3,
		OrderId:3,
		Quantity:1
	},
	DatabaseUtility.callback
);

orderItemManager.AddOrderItem(
	{
		ProductId:4,
		OrderId:4,
		Quantity:1
	},
	DatabaseUtility.callback
);

orderItemManager.AddOrderItem(
	{
		ProductId:5,
		OrderId:5,
		Quantity:1
	},
	DatabaseUtility.callback
);