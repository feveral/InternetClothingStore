'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var ProductManager = require('../server/ProductManager.js');
var productManager = new ProductManager(DatabaseUtility.Getdb());

var subCategory = 'Basic'
var category = '短袖上衣'

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"潮流火炎LOGO短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','灰色'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

var subCategory = 'Basic'
var category = '短袖上衣'

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"SHTICK休閒草寫短TEE",
		Price:480,
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
		ManagerId:'104820021',
		Name:"美式街頭國旗短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['緞彩黑','緞彩灰'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"落肩條紋質感短TEE",
		Price:490,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['條紋A','條紋B','條紋C','條紋D','條紋E','條紋F','條紋G','條紋H','條紋I','條紋J','條紋K','條紋K','條紋M','條紋N','條紋O','條紋P'],
	['F'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"電力LOGO熱感應短T",
		Price:580,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','灰色','深藍','黑色'],
	['S','M','L','XL','2XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"厚磅圓領素面短TEE",
		Price:690,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑&白'],
	['S','M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"排汗速乾短TEE",
		Price:490,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['麻灰','麻黑','麻寶藍'],
	['S','M','L','XL','2XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"潑水透氣反光LOGO短TEE",
		Price:490,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['丈青','淺灰','黑色','暗紅','綠色','橘色','寶藍'],
	['S','M','L','XL','2XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"植絨假兩件條紋短TEE",
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
		ManagerId:'104820021',
		Name:"街頭字母撞色短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"字母線條撞色短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色','麻黑'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"品牌素面圓弧七分袖TEE",
		Price:450,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['水藍','彩灰','莓紅','麻灰藍','麻咖啡','麻花紅','麻翠藍','紫藍','綠色','駝色','鵝黃','藕粉'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"植絨變形金剛狂派短TEE",
		Price:580,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','黑色'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"植絨變形金剛博派短TEE",
		Price:580,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','黑色'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"HIGH_MOUNTAIN文字短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['綠色','黑色'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"品牌素面扣環五分袖短TEE",
		Price:349,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['彩粉綠','莓紅','麻花紅','麻粉綠','麻翠藍','紫藍','藕粉'],
	['M','L','XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"街頭迷彩文字設計短TEE",
		Price:349,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['深藍','白色'],
	['M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"品牌素面口袋短TEE",
		Price:390,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色','麻水藍','麻花紅','麻花黑'],
	['S','M','L','XL','2XL'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"UFO1989火箭短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','粉橘'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"閃電勝利之手短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色'],
	['S'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"VICTORY_EUROPE_DAY字母短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['紅色'],
	['M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"街頭ARMY字母短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['S'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"FXXK_TOKYO短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','藍色'],
	['S'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"趣味卡通骷髏人短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','粉橘'],
	['M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"DIAMOND鴨子短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"BEST_XXX撞色短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','綠色'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"維京戰士頭盔短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['紅色','黑色'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"飛行員文字短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['紅色'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"PS文字設計短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['深藍','白色'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"文字方塊短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"BEST字母撞色短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色'],
	['L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"80'S熱帶配色短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色'],
	['M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"趣味貓咪仙人掌短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['藍色','白色','黑色'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"美式TRAINNING86短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','黑色'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"街頭無秩序短TEE",
		Price:590,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['深藍'],
	['S'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"潑漆LOGO拼接圓弧下擺短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','黑色'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"漸層撞色點點文字短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['米黃','麻藍'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"線條設計LOGO文字短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['白色','黑色'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"熱轉印植絨重機短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['深灰','麻白'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"STILLAS方框排版文字短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色'],
	['M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"STILLAS黑豹短TEE",
		Price:480,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色','藍色'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"趣味MONKEY短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','灰色'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"街頭文字撞色短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['黑色','白色'],
	['S','M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"品牌西瓜字母短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['粉橘','白色'],
	['M','L'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"美式NEW_YORK字母短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['灰色','黑色'],
	['S','M'],
	DatabaseUtility.callback
);

productManager.AddProductIterately(
	{
		ManagerId:'104820021',
		Name:"品牌愛心手勢短TEE",
		Price:380,
		Color:'',
		Size:'',
		Stock:0,
		Category: subCategory,
		SubCategory: category,
		ImagePath:''
	},
	['灰色','黑色'],
	['S','M','L'],
	DatabaseUtility.callback
);
