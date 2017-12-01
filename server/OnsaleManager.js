'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class OnsaleManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddOnsale(attribute,callback){
		this.db.query(
			"INSERT INTO ONSALE " +
			"(ProductId,Date,Price)" +
			"VALUES ( " + 
			"'" + attribute['ProductId'] +  "' , " + 
			"'" + attribute['Date'] + "' , " +  
			"'" + attribute['Price'] +  "' ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}
}