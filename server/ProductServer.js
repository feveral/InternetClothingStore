'use strict';

const ProductManager = require('./ProductManager.js');
const path = require('path');
const url = require('url');

module.exports = class{

	constructor(app){
		this.app = app;
		this.productManager = new ProductManager();
		this.SetAPI();
	}

	SetAPI(){
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

		// Get product which subHeader is CowBoyShorts
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

		// Get product which subHeader is WorkingPant
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

		// Get product which subHeader is BaseBallCoat
		self.app.get('/GET/product/BaseBallCoat',function(req,res){
			self.productManager.GetAllProductBySubCategory('棒球外套',function(err,result){
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

			// Get product which subHeader is FlightCoat
		self.app.get('/GET/product/FlightCoat',function(req,res){
			self.productManager.GetAllProductBySubCategory('飛行外套',function(err,result){
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


			// Get product which subHeader is FlightCoat
		self.app.get('/GET/product/HoodedCoat',function(req,res){
			self.productManager.GetAllProductBySubCategory('連帽外套',function(err,result){
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


			// Get product which subHeader is Hat
		self.app.get('/GET/product/Necklace',function(req,res){
			self.productManager.GetAllProductBySubCategory('飾品',function(err,result){
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

			// Get product which subHeader is Hat
		self.app.get('/GET/product/Phonecase',function(req,res){
			self.productManager.GetAllProductBySubCategory('手機殼',function(err,result){
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

				// Get product which subHeader is Hat
		self.app.get('/GET/product/Socks',function(req,res){
			self.productManager.GetAllProductBySubCategory('襪子',function(err,result){
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

			// Get product which subHeader is Hat
		self.app.get('/GET/product/Bag',function(req,res){
			self.productManager.GetAllProductBySubCategory('背包',function(err,result){
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


			// Get product which subHeader is Hat
		self.app.get('/GET/product/WindCoat',function(req,res){
			self.productManager.GetAllProductBySubCategory('風衣外套',function(err,result){
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

				// Get product which subHeader is Hat
		self.app.get('/GET/product/LongSleeveTop',function(req,res){
			self.productManager.GetAllProductBySubCategory('長袖上衣',function(err,result){
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

		// Get product which subHeader is Hat
		self.app.get('/GET/product/Hat',function(req,res){
			self.productManager.GetAllProductBySubCategory('帽子',function(err,result){
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

		// Get all Basic product
		self.app.get('/GET/product/Basic',function(req,res){
			self.productManager.GetAllProductByCategory('Basic',function(err,result){
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
