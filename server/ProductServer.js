'use strict';

const ProductManager = require('./ProductManager.js');
const querystring = require('querystring');
const path = require('path');
const url = require('url');

module.exports = class{

	constructor(app,db){
		this.app = app;
		this.productManager = new ProductManager(db);
		this.SetAllAPI();
	}

	SetAllAPI(){
		var self = this;
		self.app.all('*',function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
			res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
			next();
		});

		// Get SubCategory from Category
		self.app.get('/GET/subCategory/*/',function(req,res){
			var category = path.basename(req.url);
			self.productManager.GetSubCategoryByCategory(category,function(err,result){
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

		// Get product which subHeader is workingPant
		self.app.get('/GET/product/WorkingPant',function(req,res){
			self.productManager.GetAllProductBySubCategory('工作長褲',function(err,result){
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

		// Get product which subHeader is cowBoyShorts
		self.app.get('/GET/product/CowBoyShorts',function(req,res){
			self.productManager.GetAllProductBySubCategory('牛仔短褲',function(err,result){
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

		// Get product which subHeader is plainTee
		self.app.get('/GET/product/PlainTee',function(req,res){
			self.productManager.GetAllProductBySubCategory('素面大學TEE',function(err,result){
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

		// Get product which subHeader is plainHatLongTee
		self.app.get('/GET/product/PlainHatLongTee',function(req,res){
			self.productManager.GetAllProductBySubCategory('素面連帽TEE',function(err,result){
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

		// Get product which subHeader is plainTee
		self.app.get('/GET/product/PlainRoundNeckTee',function(req,res){
			self.productManager.GetAllProductBySubCategory('素面圓領長TEE',function(err,result){
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

		// Get all Bottom product
		self.app.get('/GET/product/Bottom',function(req,res){
			self.productManager.GetAllProductByCategory('Bottom',function(err,result){
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

		// Get all Top product
		self.app.get('/GET/product/Top',function(req,res){
			self.productManager.GetAllProductByCategory('Top',function(err,result){
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
