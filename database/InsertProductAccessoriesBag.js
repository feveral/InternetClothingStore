'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Accessories';
var subCategory = '背包';

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"簡約純色帆布包",
		Price:780,
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

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"魔術貼撞色旅行後背包",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['藍色','灰色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"防盜隱形啤酒肚包",
		Price:790,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"多功能電腦USB充電雙肩包",
		Price:1280,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['灰色','黑色'],
	['F'],
	DatabaseUtility.callback
);
