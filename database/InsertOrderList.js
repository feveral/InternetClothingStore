'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var OrderListManager = require('../server/OrderListManager.js');
var orderListManager = new OrderListManager();

orderListManager.AddOrderList(
	{
		State:"arrived",
		Shipment:"宅配",
		Paytype:"creditcard",
		TotalPrice:100,
		Time:"2017/12/09",
		CreditCardNumber:"55887744",
		SendAddress:"台北市大安區建國南路一段81號",
		Remarks:"",
		StoreName:"NULL",
		MemberId:104820004
	},
	DatabaseUtility.callback
);

orderListManager.AddOrderList(
	{
		State:"arrived",
		Shipment:"7-11取貨",
		Paytype:"7-11取貨付款",
		TotalPrice:200,
		Time:"2017/12/20",
		StoreName:"中山分店",
		CreditCardNumber:"NULL",
		SendAddress:"NULL",
		Remarks:"",
		MemberId:104820028
	},
	DatabaseUtility.callback
);

orderListManager.AddOrderList(
	{
		State:"arrived",
		Shipment:"7-11取貨",
		Paytype:"creditcard",
		TotalPrice:300,
		StoreName:"濟南分店",
		CreditCardNumber:"58774765",
		SendAddress:"NULL",
		Time:"2017/12/25",
		Remarks:"",
		MemberId:104820028
	},
	DatabaseUtility.callback
);

orderListManager.AddOrderList(
	{
		State:"arrived",
		Shipment:"宅配",
		Paytype:"creditcard",
		TotalPrice:500,
		CreditCardNumber:"55556744",
		SendAddress:"台北市大安區忠孝東路一段751號",
		Time:"2017/12/29",
		Remarks:"",
		StoreName:"NULL",
		MemberId:104820028
	},
	DatabaseUtility.callback
);

orderListManager.AddOrderList(
	{
		State:"arrived",
		Shipment:"宅配",
		Paytype:"creditcard",
		TotalPrice:600,
		Time:"2018/1/03",
		CreditCardNumber:"75994122",
		SendAddress:"新北市北投區市政路455巷66號",
		StoreName:"NULL",
		Remarks:"",
		MemberId:104820028
	},
	DatabaseUtility.callback
);



