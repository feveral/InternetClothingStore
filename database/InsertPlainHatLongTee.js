'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Top' 
var category = '素面連帽TEE'

productManager.AddProductIterately(
	{
		ManagerId:'104820004',
		Name:"SHTICK簡約多色連帽長TEE",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['麻花白','米黃','緞彩黑','藕粉','麻深藍','墨綠','深灰','黑'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);