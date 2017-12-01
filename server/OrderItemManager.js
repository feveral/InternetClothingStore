'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class OrderItemManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddOrderItem(attribute,callback){
		this.db.query(
			"INSERT INTO ORDERITEM " +
			"(ProductId,OrderId,Quantity)" +
			"VALUES ( " + 
			attribute['ProductId'] +  " , " + 
			attribute['OrderId'] +  " , " + 
			attribute['Quantity'] +  " ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}
}