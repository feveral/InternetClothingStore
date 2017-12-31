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
			"'" + attribute['ProductId'] +  "' , " +
			"'" + attribute['MemberId'] +  "' ); " ,
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetItemsByMemberId(memberId,callback){
		this.db.query(
			"SELECT PRODUCT.Id,PRODUCT.Name,Color,Size,Price,ImagePath,PercentOff " +
			"FROM FAVORITE ,PRODUCT LEFT JOIN ONSALE ON ONSALE.ProductId=PRODUCT.Id " +
			"WHERE FAVORITE.MemberId='" + memberId + "' AND " +
			"PRODUCT.Id=FAVORITE.ProductId;",
			function(err,result){
				callback(err,result);
			}
		)
	}

	DeleteData(memberId,data,callback){
		this.db.query(
			"DELETE FROM FAVORITE WHERE MemberId=" +
			memberId+
			" AND ProductId=" +
			data['ProductId'],
			function(err,result){
				callback(err,result);
			}
		)
	}

	DeleteDataFromMemberId(memberId,callback){
		this.db.query(
			"DELETE FROM FAVORITE WHERE MemberId=" +
			memberId,
			function(err,result){
				callback(err,result);
			}
		)
	}
}
