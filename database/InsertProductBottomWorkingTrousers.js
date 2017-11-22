'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Bottom';
var subCategory = '工作長褲';

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820011',
		Name:"街頭潑漆長褲",
		Price:960,
		Color:'black',
		Size:'30',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
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
		Category: category,
		SubCategory: subCategory,
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
		Category: category,
		SubCategory: subCategory,
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
		Category: category,
		SubCategory: subCategory,
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
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其','深藍','綠色'],
	['30','32','34','36'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"多口袋軍事風工作長褲",
		Price:1280,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其'],
	['28','30'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"側口袋窄款工作褲",
		Price:1180,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其','黑色'],
	['36'],
	DatabaseUtility.callback
);


productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"口袋工作縮口長褲",
		Price:1180,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其','黑色','深藍','綠色'],
	['28','30','32','34','36','38'],
	DatabaseUtility.callback
);


productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"窄款彈性褲頭束口褲",
		Price:1080,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['黑色'],
	['30','34'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"刺繡直筒工作褲",
		Price:1080,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['黑色'],
	['34'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"側面口袋工作縮口長褲",
		Price:790,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其'],
	['32','34'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"街頭刷破抽鬚長褲",
		Price:790,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['黑色'],
	['28','30'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"品牌多色皺褶長褲",
		Price:790,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['黑色','卡其','深藍','綠色','咖啡'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"鬆緊褲頭經典拉鍊縮口長褲",
		Price:790,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['土黃色','綠色'],
	['30','32'],
	DatabaseUtility.callback
);
