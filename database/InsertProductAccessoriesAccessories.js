'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager();

var category = 'Accessories';
var subCategory = '飾品';

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"嘻哈RICH金項鍊",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['金色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"野外夜光迷彩防水石英手錶",
		Price:1080,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['紅迷彩'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"指南防水多功能電子手錶",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['灰色','黑色','綠色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"彩色金屬反光太陽眼鏡",
		Price:350,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['反光黑'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"皮革硬殼眼鏡盒",
		Price:190,
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
