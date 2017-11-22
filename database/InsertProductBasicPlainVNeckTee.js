'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Basic';
var subCategory = '素面V領短TEE';

productManager.AddProductIterately(
	{
		ManagerId:'104820004',
		Name:"SHTICK高磅素色V領短TEE",
		Price:290,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['深藍','黑色','白色','深灰','麻花藍','緞彩灰','緞彩黑','麻花黑','麻灰藍'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);
