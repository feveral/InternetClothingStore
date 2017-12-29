'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Accessories';
var subCategory = '襪子';

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"MORE中筒襪",
		Price:199,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['黑色','白色','藍色','紅色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"手電筒中筒襪",
		Price:199,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['粉紅'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"槌子中筒襪",
		Price:199,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['灰色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"大理石紋線條長襪",
		Price:199,
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
		Name:"趣味仙人掌中筒襪",
		Price:199,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['白色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"8b笑臉中筒襪",
		Price:199,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['白色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"PACCBET中筒襪",
		Price:199,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['白色','紅色','黑色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"HELLO中筒襪",
		Price:199,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['灰色','紅色','黑色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"火焰中筒襪",
		Price:199,
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
		Name:"字母撞色中筒襪",
		Price:239,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['白色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"F_GOD中筒襪",
		Price:239,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['白色'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"加厚棉質復古中筒襪",
		Price:89,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['麻紅色'],
	['F'],
	DatabaseUtility.callback
);
