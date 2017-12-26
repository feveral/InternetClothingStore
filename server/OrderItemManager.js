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

	AddOrderItemIterately(OrderId,data,callback){
		for (var i = 0;i < data.length; i++){
			this.db.query(
				"INSERT INTO ORDERITEM " +
				"(ProductId,OrderId,Quantity) " +
				"VALUES ( " + 
				data[i].Id +  " , " + 
				OrderId +  " , " + 
				data[i].Quantity +  " ); " , 
				function(err,result){
					callback(err,result);
				}  
			);
		}
	}
}