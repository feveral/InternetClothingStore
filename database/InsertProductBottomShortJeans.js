'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Bottom'
var category = '牛仔短褲'

productManager.AddProductIterately(
	{
		ManagerId:'104820011',
		Name:"街頭迷彩鬆緊牛仔短褲",
		Price:590,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色','迷彩黑'],
	['M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820011',
		Name:"布章迷彩刷色破壞牛仔短褲",
		Price:780,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色'],
	['30'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820011',
		Name:"破壞刷色老鷹牛仔短褲",
		Price:780,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色'],
	['30','32'],
	DatabaseUtility.callback
);


productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"刷色黑豹布章牛仔短褲",
		Price:780,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['30','32'],
	DatabaseUtility.callback
);


productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"硬挺厚磅牛仔短褲",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['30','32'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"車線純色牛仔短褲",
		Price:680,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['XL'],
	DatabaseUtility.callback
);
