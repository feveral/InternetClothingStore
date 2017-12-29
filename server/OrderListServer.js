'use strict';

const OrderListManager = require('./OrderListManager.js');
const MemberManager = require('./MemberManager.js');
const ShoppingCarManager = require('./ShoppingCarManager.js');
const OrderItemManager = require('./OrderItemManager.js');
const path = require('path');
const url = require('url');


module.exports = class OrderListServer{

	constructor(router){
		this.router = router;
		this.OrderListManager = new OrderListManager();
		this.memberManager = new MemberManager();
		this.shoppingCarManager = new ShoppingCarManager();
		this.orderItemManager = new OrderItemManager();
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
		    	});
		});

		self.router.get('/LoadAllOrder',function(req,res){
				new OrderListManager().GetAllOrderList(
				function(err,result){
					res.send(JSON.stringify(result));
		    	});
		});

		self.router.post('/LoadOrderDetail',function(req,res){
				new OrderListManager().ListOrderDetail(
				{
					Email:req.user,
					OrderId:req.body.OrderId
				},
				function(err,result){
					res.send(JSON.stringify(result));
		    	});
		});

		self.router.post('/LoadOrderItem',function(req,res){
				new OrderListManager().ListOrderItem(
				{
					Email:req.user,
					OrderId:req.body.OrderId
				},
				function(err,result){
					res.send(JSON.stringify(result));
		    	});
		});

		self.router.post('/LoadManagerOrderDetail',function(req,res){
				new OrderListManager().ListManagerOrderDetail(
				{
					OrderId:req.body.OrderId
				},
				function(err,result){
					res.send(JSON.stringify(result));
		    	});
		});

		self.router.post('/LoadManagerOrderItem',function(req,res){
				new OrderListManager().ListManagerOrderItem(
				{
					OrderId:req.body.OrderId
				},
				function(err,result){
					res.send(JSON.stringify(result));
		    	});
		});

		self.router.post('/PostManagerOrderState',function(req,res){
				new OrderListManager().PostManagerOrderState(
				{
					OrderId:req.body.OrderId,
					State:req.body.State,
				},
				function(err,result){
					res.send(JSON.stringify(result));
		    	});
		});

		self.router.post('/DeleteOrder',function(req,res){
				new OrderListManager().DeleteOrder(
				{
					OrderId:req.body.OrderId,
				},
				function(err,result){
					console.log(err);
					console.log(result);
					res.send(JSON.stringify(result));
		    	});
		});

		self.router.post('/postOrder',function(req,res){
			self.memberManager.GetMemberFromEmail(req.user,function(err,member){
				self.OrderListManager.AddOrderList(
				{
					MemberId:member.Id,
					State:req.body.State,
					Shipment:req.body.Shiptype,
					Paytype:req.body.Paytype,
					CreditCardNumber:req.body.CreditCardNumber,
					Time:req.body.Time,
					StoreName:req.body.StoreName,
					SendAddress:req.body.SendAddress,
					TotalPrice:req.body.totalPrice,
					Remarks:req.body.Remarks,
				},
				function(err,result){
					res.send(JSON.stringify(result));
					self.OrderListManager.GetNewestOrderListByMemberId(member.Id,function(err,order){
						self.shoppingCarManager.GetItemsByMemberId(member.Id,function(err,shoppingCar){
							self.orderItemManager.AddOrderItemIterately(order[0].Id,shoppingCar,function(err,result){
								self.shoppingCarManager.DeleteDataFromMemberId(member.Id,function(err,result){
								});
							});
						});
					});
				});
			});
		});
	}
}
