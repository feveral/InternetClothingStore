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
				new MemberManager().IsRegisterOK(
				{
					Name:req.body.Name,
					Email:req.body.Email,
					Cellphone:req.body.Cellphone,
					Password:req.body.Password,
					ComfirmPassword:req.body.ComfirmPassword,
					Address:req.body.Address
				},
				function(err,result){
					self.IsRegisterWrong(req,res,result);
		    	});
		});
	}

	AddCustomer(req,res){
		new MemberManager().AddCustomer(
		{
			Name:req.body.Name,
			Email:req.body.Email,
			Cellphone:req.body.Cellphone,
			Password:req.body.Password,
			Address:req.body.Address
		},
		function(err,result){
		});				
	}

	IsRegisterWrong(req,res,result){
		if(result.success){
			this.AddCustomer(req,res);
			res.send(JSON.stringify({success:true,message:"success register!"}));
		}
		else{
			res.send(JSON.stringify({success:false,message:result.message}));
		}
	}
}