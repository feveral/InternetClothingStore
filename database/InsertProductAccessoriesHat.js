'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Accessories';
var subCategory = '帽子';

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"KNOW ME棒球帽",
		Price:390,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['黑色'],
	['F'],
	DatabaseUtility.callback
);
