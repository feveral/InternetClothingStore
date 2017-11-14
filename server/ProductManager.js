'use strict';

module.exports = class ProductManager{

	constructor(db){
		this.db = db
	}

	addProduct(product,callback){
		this.db.query("INSERT INTO Product " +  
			"(ProductID , Name , Category , SubCategory , Price , Color , Size , Stock , ImagePath) " + 
			"VALUES " +  
			"(" + 
			product.Id + ',' +
			'"' + product.Name + '"' + ',' +
			'"' + product.Category + '"' + "," + 
			'"' + product.SubCategory + '"' + "," +
			product.Price + "," +
			'"' + product.Color + '"' + "," + 
			'"' + product.Size + '"' + "," +
			'"' + product.Stock + '"' + "," +
			'"' + product.ImagePath + '"' + ' );' ,
			function(err,result){
				callback(err,result);
			}
		);
	}

	getAllProductByCategory(category,callback){
		this.db.query("select * from Product where " + 
			"Category= " + 
			"'" + category + "'" + ";" ,
			function(err,result){
				callback(err,result);	
			}
		);
	}
}