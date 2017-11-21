'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Basic'
var category = '棒球外套'

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌街頭LOGO大衣外套",
		Price:2080,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['深藍','黑色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);
