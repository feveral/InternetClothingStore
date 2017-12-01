'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class FavoriteManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddFavorite(attribute,callback){
		this.db.query(
			"INSERT INTO FAVORITE " +
			"(ProductId,MemberId)" +
			"VALUES ( " + 
			attribute['ProductId'] +  " , " + 
			attribute['MemberId'] +  " ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}
}