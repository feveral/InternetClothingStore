'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Basic';
var subCategory = '素面圓領短TEE';

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"厚磅圓領素面短TEE黑白兩件組",
		Price:690,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['黑白'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"SHTICK高磅素色圓領短TEE",
		Price:290,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['麻花藍','麻花黑','白色','深灰','土黃','紅色','酒紅','灰白條','藍白條','湖藍','黑色','深藍','綠色','亮藍','米黃','咖啡','粉紅','鐵灰','水藍','天藍','麻花白','軍綠','莓紅','卡其','寶藍','橘紅','灰藍','紫藍','杏色','粉紫','粉綠','粉藍','緞彩灰','緞彩黑','黑白條'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);
