'use strict';

const ProductManager = require('./ProductManager.js');
const path = require('path');
const url = require('url');

module.exports = class{

	constructor(app,router){
		this.app = app;
		this.router = router;
		this.productManager = new ProductManager();
		this.SetAPI();
	}

	SetAPI(){
		var self = this;
		self.router.use(function(req,res,next){
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
			res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
			next();
		});

		// Get SubCategory from Category
		self.router.get('/subCategory/:category',function(req,res){
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
		self.router.get('/WorkingPant',function(req,res){
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
		self.router.get('/CowBoyShorts',function(req,res){
			self.productManager.GetAllProductBySubCategory('牛仔短褲',function(err,result){
				if (err)
				{
					console.log(err);
				} 
				else
				{
					console.log(result);
					res.end(JSON.stringify({success:true , data:result}));
				}
			});
		});

		// Get product which subHeader is plainHatLongTee
		self.router.get('/PlainHatLongTee',function(req,res){
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

		self.router.get('/PlainRoundNeckTee',function(req,res){
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

		self.router.get('/PlainTee',function(req,res){
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

		self.router.get('/CowBoyShorts',function(req,res){
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

		self.router.get('/WorkingPant',function(req,res){
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

		self.router.get('/BaseBallCoat',function(req,res){
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

		self.router.get('/FlightCoat',function(req,res){
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

		self.router.get('/HoodedCoat',function(req,res){
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

		self.app.get('/Necklace',function(req,res){
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

		self.router.get('/Phonecase',function(req,res){
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

		self.router.get('/Socks',function(req,res){
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

		self.router.get('/Bag',function(req,res){
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

		self.router.get('/WindCoat',function(req,res){
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

		self.router.get('/LongSleeveTop',function(req,res){
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

		self.router.get('/Hat',function(req,res){
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


		self.router.get('/Bottom',function(req,res){
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

		self.router.get('/Top',function(req,res){
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

		self.router.get('/Basic',function(req,res){
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
