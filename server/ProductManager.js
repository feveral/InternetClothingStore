'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')
const Utility = require('./Utility.js');

module.exports = class ProductManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddProduct(attribute,callback){
		this.db.query(
			"INSERT INTO PRODUCT " +
			"(ManagerId,Name,Price,Color,Size,Stock,Category,SubCategory,Date,ImagePath)" +
			"VALUES ( " + 
			"'" + attribute['ManagerId'] + "' , " + 
			"'" + attribute['Name'] +  "' , " + 
			attribute['Price'] + " , " +  
			"'" + attribute['Color'] + "' , " +  
			"'" + attribute['Size'] + "' , " +  
			attribute['Stock'] + " , " +
			"'" + attribute['Category'] +  "' , " + 
			"'" + attribute['SubCategory'] + "' , " +  
			"'" + attribute['Date'] + "' , " +  
			"'" + attribute['ImagePath'] + "' ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}

	AddProductIterately(attribute,color,size,callback){

		for(let c in color)
			for(let s in size){
				attribute['Date'] = Utility.ProduceRandomDate();
				attribute['Color'] = color[c];
				attribute['Size'] = size[s];
				attribute['Stock'] = Math.floor((Math.random() * 100) + 1);
				attribute['ImagePath'] = './image/' + attribute['Name'] + '_' + attribute['Color'] + '.jpg';
				this.AddProduct(attribute,callback);
			}	
	}

	GetProductByName(name,callback){
		this.db.query(
			"SELECT * " + 
			"FROM PRODUCT " + 
			"WHERE Name=" + "'" + name + "'" + ";" , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetSubCategoryByCategory(category,callback){
		this.db.query(
			"SELECT DISTINCT SubCategory " + 
			"FROM PRODUCT WHERE " + 
			"Category= " + 
			"'" + category + "'" + ";" ,
			function(err,result){
				var processedResult = []; 
				for(var r in result){
					processedResult.push(result[r]['SubCategory']);
				}
				callback(err,processedResult);	
			}
		);
	}

	GetAllProductByCategory(category,callback){
		this.db.query(
			"select * from PRODUCT where " + 
			"Category= " + 
			"'" + category + "'" + ";" ,
			function(err,result){
				callback(err,result);	
			}
		);
	}

	GetAllProductBySubCategory(subCategory,callback){
		this.db.query(
			"select * from PRODUCT where " + 
			"subCategory= " + 
			"'" + subCategory + "'" + ";" ,
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetProductFromAppearence(appearence,callback){

		this.db.query(
			"select * from PRODUCT where " + 
			"Name=" + "'" + appearence.Name + "'" + " AND " +  
			"Color=" + "'" + appearence.Color + "'" + " AND " + 
			"Size=" + "'" + appearence.Size + "'",
			function(err,result){
				callback(err,result[0]);
			}
		);	
	}
}