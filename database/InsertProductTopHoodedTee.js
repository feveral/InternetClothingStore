'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Top'
var category = '連帽長TEE'

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"袖口印花落肩連帽長TEE",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','深藍'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"熱感應貼布印花帽TEE",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','灰色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"層次細節兩件式連帽上衣",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','鐵灰'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"街頭袖子拼接印花字母毛圈連帽長TEE",
		Price:780,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','寶藍黑','黑橘'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"街頭品牌袖拼接毛圈連帽TEE",
		Price:780,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['橘色','黑色','寶藍','深藍'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌字母連帽長TEE",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','深藍','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"LOGO繡花落肩帽T",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','深藍','灰色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"環繞星星品牌LOGO帽TEE",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','灰色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"SHTICK簡約多色連帽長TEE",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['麻花白','米黃','緞彩黑','藕粉','麻深藍','墨綠','深灰','黑色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌普普風連帽長TEE",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','粉紅','麻白'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"街頭LOGO玫瑰圖紋連帽長TEE",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','深藍','灰色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式假兩件七分帽T",
		Price:690,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['寶藍','橘色','深藍','黑色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式彩色LOGO繡花落肩連帽長TEE",
		Price:1080,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','深藍','灰色','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"SHTICK連帽風衣夾克",
		Price:590,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黃色','紅色','藍色','軍綠','卡其'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"街頭文字連帽長TEE",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','深藍','白色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"爪痕撞色連帽長TEE",
		Price:490,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白黑','黑色','黑白'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"經典花卉老虎連帽長TEE",
		Price:490,
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
		Name:"BF風老虎連帽長TEE",
		Price:490,
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
		Name:"百搭頭像連帽長TEE",
		Price:490,
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
		Name:"刺繡玫瑰連帽長TEE",
		Price:490,
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
		Name:"品牌街頭LOGO連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['軍綠'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"街頭虎斑鯊魚連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['綠色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式SSS撞色連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','灰色','莓紅'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"街頭品牌方塊連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['綠色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌LOGO點點連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['深藍','軍綠'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"街頭虎斑撞色連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['軍綠'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式字母翅膀連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['軍綠'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"美式街頭字母撞色連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['軍綠'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌歌德圖騰連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['莓紅'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"品牌SLS變形蟲連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['卡其','灰色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"街頭18號球衣連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['軍綠'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"雙色拼接SA刷毛連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑灰'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820027',
		Name:"SHTICK磨毛素面連帽長TEE",
		Price:880,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['莓紅'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);
