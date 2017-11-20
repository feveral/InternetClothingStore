'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Top' 
var category = '素面大學TEE'

productManager.AddProductIterately(
	{
		ManagerId:'104820004',
		Name:"簡約多色刷毛長袖大學TEE",
		Price:590,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['空軍藍','黑色','麻花白','麻黑','麻深藍','粉藍','緞彩灰','緞彩黑','麻紅色','莓紅','寶藍','深灰','粉紅','白色','灰色','黃色','橘色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);
