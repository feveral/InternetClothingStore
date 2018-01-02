'use strict';

const ProductManager = require('./ProductManager.js');
const MemberManager = require('./MemberManager.js');
const Utility = require('./Utility.js');
const querystring = require('querystring');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const url = require('url');

module.exports = class{

	constructor(router){
		this.router = router;
		this.productManager = new ProductManager();
		this.memberManager = new MemberManager();
		this.SetAPI();
	}

	SetAPI(){
		var self = this;

		self.router.get('/id/:Id',function(req,res){
			req.url = decodeURI(req.url);
			var Id = path.basename(req.url);
			self.productManager.GetProductById(Id,function(err,result){
				if (err)
				{
					res.end(JSON.stringify({success:false , reason:err}));
				} 
				else
				{
					res.end(JSON.stringify({success:true , data:result}));
				}
			});
		});

		self.router.post('/InsertNewProduct',function(req,res){
			self.memberManager.GetMemberFromEmail(req.user,function(err,member){
				self.productManager.AddProduct(
					{
						ManagerId:member.Id,
						Name:req.body.Name,
						Stock:req.body.Quantity,
						Size:req.body.Size,
						Color:req.body.Color,
						Price:req.body.Price,
						Category:req.body.Category,
						SubCategory:req.body.SubCategory,
						ImagePath:req.body.ImagePath,
						Date:req.body.Date,
					}
					,function(err,result){
					if (err)
					{
						res.end(JSON.stringify({success:false , reason:err}));
					} 
					else
					{
						res.end(JSON.stringify({success:true , data:result}));
					}
				});
			});
		});

		self.router.get('/AllColor',function(req,res){
			self.productManager.GetAllColor(function(err,result){
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

		self.router.get('/search/:toSearch',function(req,res){
			req.url = decodeURI(req.url);
			var toSearch = path.basename(req.url);
			self.productManager.GetSearchProductByName(toSearch,function(err,result){
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

		self.router.get('/selectType/',function(req,res){
			var parsedUrl = url.parse(decodeURI(req.url));  
			var parsedQs = querystring.parse(parsedUrl.query);
			self.productManager.GetProductByPrice(parsedQs['selectType'],parsedQs['Subcategory'],function(err,result){
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

		self.router.get('/selectTypeNew/',function(req,res){
			var parsedUrl = url.parse(decodeURI(req.url));  
			var parsedQs = querystring.parse(parsedUrl.query);
			self.productManager.GetProductNewByPrice(parsedQs['selectType'],function(err,result){
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

		self.router.get('/price/',function(req,res){
			var parsedUrl = url.parse(decodeURI(req.url));  
			var parsedQs = querystring.parse(parsedUrl.query);
			self.productManager.GetPriceByNameColor(parsedQs['Name'],parsedQs['Color'],function(err,result){
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

		self.router.get('/appearence/',function(req,res){
			var parsedUrl = url.parse(decodeURI(req.url));  
			var parsedQs = querystring.parse(parsedUrl.query);
			self.productManager.GetProductByAppearence(parsedQs,function(err,result){
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

		self.router.get('/color/:color',function(req,res){
			req.url = decodeURI(req.url);
			var color = path.basename(req.url);
			self.productManager.GetColorByName(color,function(err,result){
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

		self.router.get('/size/:size',function(req,res){
			req.url = decodeURI(req.url);
			var size = path.basename(req.url);
			self.productManager.GetSizeByName(size,function(err,result){
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

		self.router.post('/delete',function(req,res){
			var attribute = 
			{
				Name: req.body.Name,
				Color: req.body.Color,
				Size: req.body.Size,
				Stock: req.body.Stock,
				Price: req.body.Price
			};
			self.memberManager.IsManager(req.user,function(err,isManager){
				if(isManager)
				{
					self.productManager.DeleteProductByNameColor(attribute,function(err,result){
						if(err)
						{
							res.end(JSON.stringify({success:false,reason:err}));
						}
						else
						{
							res.end(JSON.stringify({success:true}));
						}
					});
				}
			});
		});

		self.router.post('/update',function(req,res){
			var attribute = 
			{
				Name: req.body.Name,
				Color: req.body.Color,
				Size: req.body.Size,
				Stock: req.body.Stock,
				Price: req.body.Price
			};
			self.memberManager.IsManager(req.user,function(err,isManager){
				if(isManager)
				{
					self.productManager.UpdateProductPrice(attribute,function(err,result){
						if(err)
						{
							res.end(JSON.stringify({success:false,reason:err}));
						}
						else
						{
							res.end(JSON.stringify({success:true}));
						}
					});

					self.productManager.UpdateProductStock(attribute,function(err,result){
						if(err)
						{
							res.end(JSON.stringify({success:false,reason:err}));
						}
						else
						{
							res.end(JSON.stringify({success:true}));
						}
					});
				}
			});
		});

		self.router.post('/upload/',function(req,res){
			var parsedUrl = url.parse(decodeURI(req.url));  
			var attribute = querystring.parse(parsedUrl.query);
			var form = new formidable.IncomingForm();

			form.uploadDir = process.cwd();
    		form.parse(req, function (err, fields, files) {
    			var oldpath = files.filetoupload.path;
			    var newpath = process.cwd() + '/public/image/' + attribute.Name + '_' + attribute.Color + '.jpg';
        		fs.rename(oldpath, newpath, function (err) {});
 			});
    		self.memberManager.GetMemberFromEmail(req.user,function(err,member){
				attribute['ImagePath'] = './image/' + attribute['Name'] + '_' + attribute['Color'] + '.jpg';
	    		attribute['Date'] = Utility.GetDateTime();
	    		attribute['ManagerId'] = member.Id;
				self.productManager.AddProduct(
					attribute,
					function(err,result){
						res.redirect('/managerUpload.html');
					}
				);
			});
  		});
	}
}
