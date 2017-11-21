'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Accessories';
var subCategory = '帽子';

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"KNOW_ME棒球帽",
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

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"街頭條繩字母長尾老帽",
		Price:397,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['黃色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"AIR_HOME棒球帽",
		Price:390,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['白色','黑色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"後扣棒球帽",
		Price:290,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['寶藍色','暗紅色','深藍色','白色','粉色'],
	['F'],
	DatabaseUtility.callback
);
