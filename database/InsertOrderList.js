'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var OrderListManager = require('../server/OrderListManager.js');
var orderListManager = new OrderListManager(DatabaseUtility.Getdb());

orderListManager.AddOrderList(
	{
		Id:1,
		State:"arrived",
		Shipment:"airplane",
		Paytype:"creditcard",
		Time:"2017/12/09",
		MemberId:104820004
	},
	DatabaseUtility.callback
);
