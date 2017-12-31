'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')
const Utility = require('./Utility.js');
var async = require('async');

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

	UpdateProductPrice(attribute,callback){
		this.db.query(
			"UPDATE PRODUCT " + 
			"SET Price='" + attribute['Price'] + "' " +
			"WHERE Name='" + attribute['Name'] + "' AND Color='" + attribute['Color'] + "';" , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	UpdateProductStock(attribute,callback){
		this.db.query(
			"UPDATE PRODUCT " + 
			"SET Stock='" + attribute['Stock'] + "' " +
			"WHERE Name='" + attribute['Name'] + "' AND Size='" + attribute['Size'] + "' AND Color='" + attribute['Color'] + "';" , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	DeleteProductByNameColor(attribute,callback){
		this.db.query(
			"DELETE FROM PRODUCT " + 
			"WHERE Name='" + attribute['Name'] + "' AND Color='" + attribute['Color'] + "';" ,
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetAllColor(callback){
		this.db.query(
		"SELECT DISTINCT(Color) FROM PRODUCT;",
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetSearchProductByName(name,callback){
		this.db.query(
			"SELECT PRODUCT.Name,Price,Color,Size,Stock,PRODUCT.Date,ImagePath,PercentOff " + 
			"FROM PRODUCT LEFT JOIN ONSALE ON Id=ProductId " + 
			"WHERE PRODUCT.Name LIKE '%" + name + "%';" , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetProductByName(name,callback){
		this.db.query(
			"SELECT PRODUCT.Name,Price,Color,Size,Stock,PRODUCT.Date,ImagePath,PercentOff,ONSALE.Name AS OnsaleName  " + 
			"FROM PRODUCT LEFT JOIN ONSALE ON Id=ProductId " + 
			"WHERE PRODUCT.Name=" + "'" + name + "'" + ";" , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetProductById(id,callback){
		this.db.query(
			"SELECT * " + 
			"FROM PRODUCT " + 
			"WHERE Id=" + "'" + id + "'" + ";" , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetPriceByNameColor(name,color,callback){
		this.db.query(
			"SELECT DISTINCT Price,PercentOff " + 
			"FROM PRODUCT  LEFT JOIN ONSALE ON Id=ProductId  " + 
			"WHERE PRODUCT.Name=" + "'" + name + "' AND " +  
			"Color='" + color +"';" , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetColorByName(name,callback){
		this.db.query(
			"SELECT DISTINCT Color " + 
			"FROM PRODUCT " + 
			"WHERE Name=" + "'" + name + "'" + ";" , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetSizeByName(name,callback){
		this.db.query(
			"SELECT DISTINCT Size " + 
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
			"SELECT PRODUCT.Name,Price,Color,Size,Stock,PRODUCT.Date,ImagePath,PercentOff " + 
			"FROM PRODUCT LEFT JOIN ONSALE ON Id=ProductId " + 
			"WHERE Category=" + 
			"'" + category + "'" + ";", 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetAllProductBySubCategory(subCategory,callback){
		this.db.query(
			"SELECT PRODUCT.Name,Price,Color,Size,Stock,PRODUCT.Date,ImagePath,PercentOff " + 
			"FROM PRODUCT LEFT JOIN ONSALE ON Id=ProductId " + 
			"WHERE SubCategory=" + 
			"'" + subCategory + "'" + ";", 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetProductByAppearence(appearence,callback){
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

	GetIdsByName(name,callback){
		this.db.query(
			"select Id from PRODUCT where " + 
			"Name=" + "'" + name + "';",
			function(err,result){
				var list = []
				for (var i = 0 ; i < result.length ; i++) {
					list.push(result[i]["Id"]);
				}
				callback(err,list);
			}
		);
	}

	GetMaxId(callback){
		this.db.query(
			"SELECT MAX(Id) AS MaxId FROM PRODUCT;" , 
			function(err,result){
				callback(err,parseInt(result[0]['MaxId']));
			}
		);
	}

	GetNewProduct(callback){
		this.db.query(
			"SELECT PRODUCT.Name,Price,Color,Size,Stock,PRODUCT.Date,ImagePath,PercentOff " +
			"FROM PRODUCT left join ONSALE ON ProductId=Id" + 
			' WHERE PRODUCT.Date>="2017-12-01" AND PRODUCT.Date <="2017-12-30";',
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetOnsaleProduct(callback){
		this.db.query(
			"SELECT PRODUCT.Name,Price,Color,Size,Stock,PRODUCT.Date,ImagePath,PercentOff " +
			"FROM PRODUCT left join ONSALE ON ProductId=Id" + 
			' WHERE PercentOff <> "";',
			function(err,result){
				callback(err,result);
			}
		);
	}


	LossProductQuantity(data,callback){
		this.db.query(
			"update PRODUCT SET Stock = Stock - " + data['Quantity'] + " WHERE Id = " + data['Id'] + ";",    
			function(err,result){
				callback(err,result);
			}
		);
	}

	LossProductQuantityIterative(data,callback){
		console.log(data);
		for (var dataIndex in data)
		{
			this.LossProductQuantity(data[dataIndex],callback);
		}
	}

	DetermineIfQuantityIsEnough(data,callback){
		var self = this;
		var resultData = {};
		var todo = [];
		var count = 0;

		async.whilst(
			function(){
				return count < data.length;
			},
			function(callback){
				self.CheckQuantityById(data[count]['Id'],data[count]['Quantity'],callback);
				count++;
			},
			function (err,result){
				console.log("err" + err);
				console.log(err);
				callback(err,true);
			}



		);
	}


	CheckQuantityById(productId,quantity,callback){
		console.log(productId);
		this.db.query(
			"SELECT Name,Stock,Size,Color  From PRODUCT WHERE Id = " + 
			productId +
			";",    
			function(err,result){
				console.log(result);
				console.log(result[0]['Stock']);
				if(result[0]['Stock'] < quantity)
				{	
					console.log("error");
					err = result;			
				}
				callback(err,result);
			}
		);
	}

	GetQuantityById(productId,callback){
		this.db.query(
			"SELECT Stock From PRODUCT WHERE Id = " + 
			productId +
			";",    
			function(err,result){
				callback(err,result);
			}
		);
	}


}

