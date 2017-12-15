'use strict';

const MemberManager = require('./MemberManager.js');
const path = require('path');
const url = require('url');

module.exports = class MemberServer{

	constructor(router){
		this.router = router;
		this.memberManager = new MemberManager();
		this.SetApi();
	}

	SetApi(){
		var self = this;
		self.router.post('/register',function(req,res){
			new MemberManager().AddCustomer(
			{
				Name:req.body.Name,
				Email:req.body.Email,
				Cellphone:req.body.Cellphone,
				Password:req.body.Password,
				ComfirmPassword:req.body.ComfirmPassword,
				Address:req.body.Address
			},
			function(err,result){
				res.send(JSON.stringify({result:result}));
	    	});
		});
	}
}