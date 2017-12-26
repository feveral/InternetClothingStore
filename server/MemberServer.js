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

		self.router.post('/modify',function(req,res){
			new MemberManager().UpdateMemberInformation(
			{
				Name:req.body.Name,
				Email:req.user,
				Cellphone:req.body.Cellphone,
				Address:req.body.Address
			},
			function(err,result){
				if (err)
				{
					res.end(JSON.stringify({success:false , result:err}));
					console.log(err);
				} 
				else
				{
					res.end(JSON.stringify({success:true , result:result}));
				}
	    	});
		});

		self.router.post('/modifyPassword',function(req,res){
			new MemberManager().UpdateMemberPassword(
			{
				Email:req.user,
				OriginPassword:req.body.OriginPassword,
				NewPassword:req.body.NewPassword
			},
			function(err,result){
				if (err)
				{
					res.end(JSON.stringify({success:false , result:err}));
					console.log(err);
				} 
				else
				{
					res.end(JSON.stringify({success:true , result:result}));
				}
	    	});
		});

		self.router.get('/getMemberInformation',function(req,res){
			new MemberManager().GetMemberFromEmail(
			req.user,
			function(err,result){
				res.send(JSON.stringify({result:result}));
	    	});
		});

		self.router.get('/isManager',function(req,res){
			if(req.user === undefined)
			{
				res.send(JSON.stringify({success:false,reason:'You should Login'}));
				return;
			}
			new MemberManager().IsManager(req.user,function(err,isManager){
				if(err)
				{
					res.send(JSON.stringify({success:false,reason:err}));
				}
				else
				{
					res.send(JSON.stringify({success:true,result:isManager}));
				}
	    	});
		});
	}
}