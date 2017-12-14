'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class ShoppingCarManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddShoppingCar(attribute,callback){

		this.db.query(
			"INSERT INTO SHOPPINGCAR " +
			"(ProductId,MemberId,Quantity)" +
			"VALUES ( " + 
			"'" + attribute['ProductId'] +  "' , " + 
			"'" + attribute['MemberId'] + "' , " +  
			attribute['Quantity'] +  " ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}

	GetItemsByMemberId(memberId,callback){

	}
}