'use strict';

const MemberManager = require('./MemberManager.js');
const path = require('path');
const url = require('url');

module.exports = class MemberServer{

	constructor(app){
		this.app = app;
		this.memberManager = new MemberManager();
		this.SetApi();
	}

	SetApi(){
		var self = this;
		self.app.all('*',function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
			res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
			next();
		});

		// Get SubCategory from Category
		self.app.get('/GET/member/',function(req,res){
			res.end('you get all member');
		});
	}





}