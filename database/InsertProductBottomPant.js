'use strict';

var Database = require('./ConnectDatabase.js');

//id 1-4
Database.IterateInsertProduct(
	{
		Id:'',
		ManagerId:'00000',
		Name:"街頭潑漆長褲",
		Price:960,
		Color:'black',
		Size:'30',
		Stock:20,
		Category:'Bottom',
		SubCategory:'Pant',
		ImagePath:'./image/pant00001.jpg'
	},
	1,
	['black'],
	['30','32','34','36']
);

//id 5-8
Database.IterateInsertProduct(
	{
		Id:'',
		ManagerId:'00000',
		Name:"街頭迷彩工作長褲",
		Price:980,
		Color:'',
		Size:'',
		Stock:0,
		Category:'Bottom',
		SubCategory:'Pant',
		ImagePath:''
	},
	5,
	['purple','green','yellow','black'],
	['XL']
);

//id 9-12
Database.IterateInsertProduct(
	{
		Id:'',
		ManagerId:'00000',
		Name:"風格剪裁條紋工作褲",
		Price:750,
		Color:'',
		Size:'',
		Stock:0,
		Category:'Bottom',
		SubCategory:'Pant',
		ImagePath:''
	},
	9,
	['black'],
	['M','L','Xl','2XL']
);

//id 13
Database.IterateInsertProduct(
	{
		Id:'',
		ManagerId:'00000',
		Name:"軍事風水洗九分褲",
		Price:1080,
		Color:'',
		Size:'',
		Stock:0,
		Category:'Bottom',
		SubCategory:'Pant',
		ImagePath:''
	},
	13,
	['green'],
	['32']
);

//id 14
Database.IterateInsertProduct(
	{
		Id:'',
		ManagerId:'00000',
		Name:"尼龍腰帶休閒工作長褲",
		Price:1180,
		Color:'',
		Size:'',
		Stock:0,
		Category:'Bottom',
		SubCategory:'Pant',
		ImagePath:''
	},
	14,
	['khaki','darkBlue','green'],
	['30','32','34','36']
);