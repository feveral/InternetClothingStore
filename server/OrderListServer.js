'use strict';

const OrderListManager = require('./OrderListManager.js');
const path = require('path');
const url = require('url');


module.exports = class{

	constructor(router){
		this.router = router;
		this.orderListManager = new OrderListManager(); 
		this.SetAPI();
	}

	SetAPI(){
		var self = this;
		self.router.get('/:memberId',function(req,res){
			var memberId = path.basename(req.url);
			self.orderListManager.GetOrderListByMemberId(memberId,function(err,result){
				console.log(result);
				res.end(JSON.stringify({success:true,data:result}));
			});
		});
	}
}