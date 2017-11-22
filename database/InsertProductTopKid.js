'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Top'
var category = 'Kid'

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"SHTICK素面圓領兒童短TEE",
		Price:190,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['天藍','卡其','白色','灰藍','杏色','亮藍','紅色','軍綠','粉紫','粉綠','粉藍','酒紅','深藍','莓紅','麻花白','湖藍','紫藍','黑色','綠色','橘紅','寶藍','鐵灰'],
	['110','120','130','140'],
	DatabaseUtility.callback
);
