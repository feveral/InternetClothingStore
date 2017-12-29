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
		this.db.query(
			"SELECT PRODUCT.Id,PRODUCT.Name,Color,Size,Price,ImagePath,PercentOff,Quantity " + 
			"FROM SHOPPINGCAR ,PRODUCT LEFT JOIN ONSALE ON ONSALE.ProductId=PRODUCT.Id " + 
			"WHERE SHOPPINGCAR.MemberId='" + memberId + "' AND " + 
			"PRODUCT.Id=SHOPPINGCAR.ProductId;", 
			function(err,result){
				console.log(result)

				callback(err,result);
			}
		)
	}

	UpdateData(memberId,data,callback){
		this.db.query(
			"UPDATE SHOPPINGCAR SET Quantity=" + 
			data['Quantity'] + 
			" WHERE ProductId=" + 
			data['ProductId'] + 
			" AND MemberId=" +
			memberId + ";",
			function(err,result){
				callback(err,result);
			}
		)
	}

	DeleteData(memberId,data,callback){
		this.db.query(
			"DELETE FROM SHOPPINGCAR WHERE MemberId=" + 
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
			"DELETE FROM SHOPPINGCAR WHERE MemberId=" + 
			memberId,
			function(err,result){
				callback(err,result);
			}
		)
	}
}
