'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class OnsaleManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
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
}