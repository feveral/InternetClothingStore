'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Accessories';
var subCategory = '手機殼';

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"四合一鏡頭手機殼",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['白色'],
	['5.5'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"LED發光素面手機殼",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['白色','黑色'],
	['4.7','5.5'],
	DatabaseUtility.callback
);
