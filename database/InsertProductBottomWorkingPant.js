'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Bottom';
var category = '工作長褲';

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820011',
		Name:"街頭潑漆長褲",
		Price:960,
		Color:'black',
		Size:'30',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['30','32','34','36'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820011',
		Name:"街頭迷彩工作長褲",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['紫色','綠色','黃色','黑色'],
	['XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820011',
		Name:"風格剪裁條紋工作褲",
		Price:750,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['M','L','XL','2XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820011',
		Name:"軍事風水洗九分褲",
		Price:1080,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['綠色'],
	['32'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820011',
		Name:"尼龍腰帶休閒工作長褲",
		Price:1180,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['卡其','深藍','綠色'],
	['30','32','34','36'],
	DatabaseUtility.callback
);