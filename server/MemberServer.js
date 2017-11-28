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
		self.router.use('*',function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
			res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
			next();
		});

		// Get SubCategory from Category
		self.router.get('/GET/member/',function(req,res){
			res.end('you get all member');
		});
	}
}