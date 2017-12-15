'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')
const ProductManager = require('./ProductManager.js');
const Utility = require('./Utility.js');


module.exports = class OnsaleManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
		this.productManager = new ProductManager();
	}

	AddOnsale(attribute,callback){
		this.db.query(
			"INSERT INTO ONSALE " +
			"(ProductId,Name,Date,PercentOff)" +
			"VALUES ( " + 
			"'" + attribute['ProductId'] +  "' , " + 
			"'" + attribute['Name'] + "' , " +  
			"'" + attribute['Date'] + "' , " +  
			"'" + attribute['PercentOff'] +  "' ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}

	AddOnsaleRandomly(name,date,percentOff,callback){
		var self = this;
		self.productManager.GetMaxId(function(err,maxProductId){
			var randomProductId = Utility.ProduceRandomNumber(maxProductId,700);
			var attribute = 
			{
				Name: name,
				Date: date,
				PercentOff: percentOff
			}
			for(var i = 0 ; i < randomProductId.length ; i++)
			{
				attribute['ProductId'] = randomProductId[i]
				self.AddOnsale(attribute,function(err,result){
					if(err)
						console.log(err);
					else
						console.log(result);
				});
			}
		});
	}

	AddOnsaleByProductName(productName,attribute,callback){
		var self = this;
		self.productManager.GetIdsByName(productName,function(err,Ids){

			for(var i = 0 ; i < Ids.length ; i++)
			{
				attribute['ProductId'] = Ids[i];
				self.AddOnsale(attribute,function(err,result){
					if(err)
						console.log(err);
					else
						console.log(result);
				});
			}
		});
	}
}