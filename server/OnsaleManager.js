'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')
const ProductManager = require('./ProductManager.js');


module.exports = class OnsaleManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
		this.productManager = new ProductManager();
		this.AddOnsaleRandomly();
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

	// AddOnsaleRandomly(saleName,callback){

	// 	this.productManager.GetMaxId(function(err,maxProductId){
	// 		this.db.query(
	// 			"SELECT MAX(Id) AS MaxId FROM PRODUCT" , 




	// 			function(err,result){

	// 			}
	// 		);
	// 	});



	// }

	// GetOnSaleByProductCategory(category,callback){
	// 	this.db.query(
	// 		"SELECT * " + 
	// 		"FROM ONSALE,PRODUCT " + 
	// 		"WHERE Category=" + "'" + category + "'" + "AND" + 
	// 		"Id=ProductId AND" + 
	// 	);
	// }
}