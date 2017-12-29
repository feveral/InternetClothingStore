'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Top'
var category = '背心'

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
		Name:"細條紋背心",
		Price:349,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['粉紅','藍色','深灰','黑色','灰色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌英文草寫背心",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','粉紅','黑色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌13火焰背心",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','黑色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌側拉鍊背心",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','緞彩黑','緞彩灰','麻紅色','黑色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌滿版LOGO撞色背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','粉紅'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌LOGO撞色背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','藍色','灰色'],
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

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"夏日花卉球衣背心",
		Price:590,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式NYC拼接撞色背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式線條撞色背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','米黃'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"NEWYOURK撞色字母背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式潮流拉鍊背心",
		Price:490,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色','深灰'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式PARIS字母背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式星星BROOKLYN背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌簡約字母背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['深灰'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"圓弧萬用假下擺",
		Price:290,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑白','粉紅','綠色','深灰'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"平口萬用假下擺",
		Price:290,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑白','粉紅','灰色','綠色','深灰'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"SASCO雙色質感背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式休閒圖章背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"數字23接拼簡約無袖背心上衣",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑白','白黑'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"數字133興印花無袖背心上衣",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"69潮流街頭感無袖背心上衣",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"FOREVER字母背心",
		Price:580,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"三角框潮流網狀背心球衣",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"MIT_STLLAS反轉微笑球衣背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"MIT_1994回到未來字母球衣背心",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"MIT_MONEY_GEMS潮流球衣背心",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);
