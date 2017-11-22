'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Bottom'
var category = '棉短褲'

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"口袋電繡棉短褲",
		Price:590,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['深藍','黑色','淺灰','米白'],
	['M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"品牌抽繩棉短褲",
		Price:390,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['空軍藍','虎斑灰','虎斑藍','虎斑黑','深灰','深藍','淺灰'],
	['S','M','L','XL','2XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"品牌鬆緊抽繩棉短褲",
		Price:590,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['灰色','黑色','緞黑'],
	['S','M','L','XL','2XL'],
	DatabaseUtility.callback
);
