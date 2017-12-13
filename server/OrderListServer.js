'use strict';

const OrderListManager = require('./OrderListManager.js');
const path = require('path');
const url = require('url');

module.exports = class OrderListServer{

	constructor(router){
		this.router = router;
		this.OrderListManager = new OrderListManager();
		this.SetApi();
	}

	SetApi(){
		var self = this;
		self.router.get('/LoadOrderList',function(req,res){
				new OrderListManager().ListOrderList(
				{
					Email:req.user
				},
				function(err,result){
					res.send(JSON.stringify(result));
					console.log(result);
		    	});
		});

		self.router.post('/LoadOrderDetail',function(req,res){
				new OrderListManager().ListOrderDetail(
				{
					Email:req.user,
					OrderId:req.body.OrderId
				},
				function(err,result){
					console.log("bitch");
					console.log(result);
					res.send(JSON.stringify(result));
		    	});
		});

		self.router.post('/LoadOrderItem',function(req,res){
				console.log("bitch");
				new OrderListManager().ListOrderItem(
				{
					Email:req.user,
					OrderId:req.body.OrderId
				},
				function(err,result){
					res.send(JSON.stringify(result));
		    	});
		});
	}
}


