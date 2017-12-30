'use strict';

const FavoriteManager = require('./FavoriteManager.js');
const ProductManager = require('./ProductManager.js');
const MemberManager = require('./MemberManager.js');
const path = require('path');
const url = require('url');

module.exports = class {
  constructor(router) {
    this.router = router;
		this.favoriteManger = new FavoriteManager();
		this.productManager = new ProductManager();
		this.memberManager = new MemberManager();
		this.SetAPI();
  }

  SetAPI(){
		var self = this;
		self.router.post('/',function(req,res){
			var appearence =
			{
				Name: req.body.Name,
				Color: req.body.Color,
				Size: req.body.Size,
			}

			self.memberManager.GetMemberFromEmail(req.user,function(err,member){
				self.productManager.GetProductByAppearence(appearence,function(err,product){
					var attribute = appearence;
					attribute['ProductId'] = product.Id;
					attribute['MemberId'] = member.Id;
					attribute['Quantity'] = req.body.Quantity;
					self.favoriteManger.AddFavorite(attribute,function(err,result){
						res.end(JSON.stringify({success:true}));
					});
				});
			});
		});

		self.router.get('/',function(req,res){

			if( req.user === undefined )
			{
				res.end(JSON.stringify({success:false}));
				return;
			}
			self.memberManager.GetMemberFromEmail(req.user,function(err,member){
				self.favoriteManger.GetItemsByMemberId(member.Id,function(err,result){
          if(result.length>0)
						result = self.checkoutManager.CalculateTotal(result);
					res.end(JSON.stringify({success:true,data:result}));
				});
			});
		});

		self.router.post('/modify',function(req,res){
			var data =
			{
				ProductId:req.body.ProductId,
				Quantity:req.body.Quantity,
			}
			self.memberManager.GetMemberFromEmail(req.user,function(err,member){
				self.favoriteManger.UpdateData(member.Id,data,function(err,result){
					self.favoriteManger.GetItemsByMemberId(member.Id,function(err,result){
						res.end(JSON.stringify({success:true,data:result}));
					});
				});
			});
		});

		self.router.post('/delete',function(req,res){
			var data =
			{
				ProductId:req.body.ProductId,
			}
			self.memberManager.GetMemberFromEmail(req.user,function(err,member){
				self.favoriteManger.DeleteData(member.Id,data,function(err,result){
					self.favoriteManger.GetItemsByMemberId(member.Id,function(err,result){
						res.end(JSON.stringify({success:true,data:result}));
					});
				});
			});
		});
	}
}
