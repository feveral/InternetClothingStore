'use strict';

const ProductManager = require('./ProductManager.js');
const path = require('path');
const url = require('url');

module.exports = class{

	constructor(router){
		this.router = router;
		this.productManager = new ProductManager();
		this.SetAPI();
	}

	SetAPI(){
		var self = this;

		self.router.get('/name/:name',function(req,res){
			req.url = decodeURI(req.url);
			var name = path.basename(req.url);
			self.productManager.GetProductByName(name,function(err,result){
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

		self.router.get('/newproduct',function(req,res){
			self.productManager.GetNewProduct(function(err,result){
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

		self.router.get('/onsaleproduct',function(req,res){
			self.productManager.GetOnsaleProduct(function(err,result){
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

		// Get product which subHeader is WorkingShorts
		self.router.get('/WorkingShorts',function(req,res){
			self.productManager.GetAllProductBySubCategory('工作短褲',function(err,result){
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

		self.router.get('/CottonPant',function(req,res){
			self.productManager.GetAllProductBySubCategory('棉長褲',function(err,result){
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

		self.router.get('/CottonShorts',function(req,res){
			self.productManager.GetAllProductBySubCategory('棉短褲',function(err,result){
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

		// Get product which subHeader is CowBoyPant
		self.router.get('/CowBoyPant',function(req,res){
			self.productManager.GetAllProductBySubCategory('牛仔褲',function(err,result){
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

		self.router.get('/Necklace',function(req,res){
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

		self.router.get('/ShortSleeve',function(req,res){
			self.productManager.GetAllProductBySubCategory('短袖上衣',function(err,result){
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


		self.router.get('/PlainVNeckTee',function(req,res){
			self.productManager.GetAllProductBySubCategory('素面V領短TEE',function(err,result){
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
			self.productManager.GetAllProductBySubCategory('素面圓領短TEE',function(err,result){
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

		self.router.get('/PlainMiddleSleeveTee',function(req,res){
			self.productManager.GetAllProductBySubCategory('素面七分袖TEE',function(err,result){
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

		self.router.get('/PlainVest',function(req,res){
			self.productManager.GetAllProductBySubCategory('素面背心',function(err,result){
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

		self.router.get('/Kid',function(req,res){
			self.productManager.GetAllProductBySubCategory('Kid',function(err,result){
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

		self.router.get('/TopHoodedTee',function(req,res){
			self.productManager.GetAllProductBySubCategory('連帽長TEE',function(err,result){
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

		self.router.get('/TopShirt',function(req,res){
			self.productManager.GetAllProductBySubCategory('襯衫',function(err,result){
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

		self.router.get('/TopVest',function(req,res){
			self.productManager.GetAllProductBySubCategory('背心',function(err,result){
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

		self.router.get('/CowBoyCoat',function(req,res){
			self.productManager.GetAllProductBySubCategory('牛仔外套',function(err,result){
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

		self.router.get('/Coat',function(req,res){
			self.productManager.GetAllProductByCategory('Coat',function(err,result){
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

		self.router.get('/Accessories',function(req,res){
			self.productManager.GetAllProductByCategory('Accessories',function(err,result){
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
