'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

function callback(err,result){
	if(err)
		console.log(err)
	else
		console.log(result)
}

var subCategory = 'Bottom' 
var category = '牛仔長褲'

productManager.AddProductIterately(
	{
		ManagerId:'104820011',
		Name:"街頭迷彩鬆緊牛仔短褲",
		Price:590,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍迷彩','黑迷彩'],
	['M','L','XL'],
	callback
);
