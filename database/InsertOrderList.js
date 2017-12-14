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
		TotalPrice:100,
		Time:"2017/12/09",
		MemberId:104820004
	},
	DatabaseUtility.callback
);

orderListManager.AddOrderList(
	{
		Id:2,
		State:"arrived",
		Shipment:"airplane",
		Paytype:"creditcard",
		TotalPrice:200,
		Time:"2017/12/20",
		MemberId:104820028
	},
	DatabaseUtility.callback
);

orderListManager.AddOrderList(
	{
		Id:3,
		State:"arrived",
		Shipment:"airplane",
		Paytype:"creditcard",
		TotalPrice:300,
		Time:"2017/12/25",
		MemberId:104820028
	},
	DatabaseUtility.callback
);

orderListManager.AddOrderList(
	{
		Id:4,
		State:"arrived",
		Shipment:"airplane",
		Paytype:"creditcard",
		TotalPrice:500,
		Time:"2017/12/29",
		MemberId:104820028
	},
	DatabaseUtility.callback
);

orderListManager.AddOrderList(
	{
		Id:5,
		State:"arrived",
		Shipment:"airplane",
		Paytype:"creditcard",
		TotalPrice:600,
		Time:"2018/1/03",
		MemberId:104820028
	},
	DatabaseUtility.callback
);



