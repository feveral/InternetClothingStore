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

		// Get SubCategory from Category
		self.router.get('/GET/member/',function(req,res){
			res.end('you get all member');
		});
	}
}