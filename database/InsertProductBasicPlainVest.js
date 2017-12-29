'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Basic'
var category = '素面背心'

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"百搭素面背心",
		Price:299,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','米黃','紫灰','綠色','莓紅','藍色','螢光黃','酒紅','鐵灰','咖啡','土黃','紅色','淺綠','灰色','湖藍','螢光綠','麻咖啡','深莓紅'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式素面麋鹿背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色','灰色','藍色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);
