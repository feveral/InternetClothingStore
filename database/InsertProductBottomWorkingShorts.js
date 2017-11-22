'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var category = 'Bottom';
var subCategory = '工作短褲';

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"厚款側口袋工作短褲",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其','地形迷彩','軍綠','迷彩黑','迷彩綠','深藍','黑色','叢林迷彩','獵鴨迷彩'],
	['30','32','34','36','38','40'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"美式抽繩鬆緊休閒短褲",
		Price:590,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['丈青','卡其','白色','灰色','軍綠','軍藍','湖水藍','黑色','鐵灰'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"滿版烏茲電繡休閒短褲",
		Price:580,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其'],
	['M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"滿版Shtick電繡休閒短褲",
		Price:580,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其','深藍'],
	['M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"SHTICK滿版刺繡海鷗工作短褲",
		Price:780,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其色','深藍色','黑色','綠色'],
	['28','30'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		Id:'',
		ManagerId:'104820021',
		Name:"素色休閒工作短褲",
		Price:1180,
		Color:'',
		Size:'',
		Stock:0,
		Category: category,
		SubCategory: subCategory,
		ImagePath:''
	},
	['卡其色','深藍色'],
	['M','L','XL','2XL'],
	DatabaseUtility.callback
);
