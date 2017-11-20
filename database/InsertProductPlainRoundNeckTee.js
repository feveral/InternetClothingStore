'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Top' 
var category = '素面圓領長TEE'

productManager.AddProductIterately(
	{
		ManagerId:'104820004',
		Name:"SHTICK素面圓領長TEE",
		Price:239,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['空軍藍','黑色','白色','灰色','橘色','緞彩灰','緞彩黑','黑白條','藍白條','灰白條'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);