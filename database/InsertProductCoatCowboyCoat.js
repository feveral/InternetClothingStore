'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Coat'
var category = '牛仔外套'

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式毛領牛仔外套",
		Price:1980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色'],
	['M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌拼接牛仔外套",
		Price:1280,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色'],
	['L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式牛仔貼布撞色外套",
		Price:1580,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色','黑色'],
	['S','M','L'],
	DatabaseUtility.callback
);
