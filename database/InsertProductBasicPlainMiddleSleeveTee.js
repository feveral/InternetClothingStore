'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Basic';
var subCategory = '素面七分袖TEE';

productManager.AddProductIterately(
	{
		ManagerId:'104820004',
		Name:"品牌素面圓弧七分袖TEE",
		Price:450,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['駝色','彩灰','鵝黃','莓紅','麻花紅','水藍','紫藍','綠色','彩粉綠','藕粉','麻咖啡','麻灰藍','麻翠藍'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);
