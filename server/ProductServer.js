'use strict';

const http = require('http');
const ProductManager = require('./ProductManager.js');

module.exports = class{

	constructor(app,db){
		this.app = app;
		this.productManager = new ProductManager(db);
		this.setapi();
	}

	setapi(){
		var self = this;
		self.app.all('*',function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
			res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
			next();
		});

		// add an Pant
		self.app.get('/add/pant',function(req,res){
			self.productManager.addProduct(product,function(err,result){
				if (err) 
					console.log(err);
				else
					console.log(result);
			}); 
		});

		//Get all pant
		self.app.get('/pant',function(req,res){
			self.productManager.getAllProductByCategory('LowerBody',function(err,result){
				if (err)
				{
					console.log(err);
				} 
				else
				{
					res.end(JSON.stringify({success:true , data:result}));
				}
			});
		});
	}
}
