'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var MemberManager = require('../server/MemberManager.js');
var memberManager = new MemberManager();

memberManager.AddManager(
	{
		Id:104820011,
		Name:"宗翰",
		Email:"feveraly@gmail.com",
		Cellphone:"0970981207",
		Password:"5566",
		Address:"高雄市三民區黃興路158巷36號"
	},
	DatabaseUtility.callback
);

memberManager.AddManager(
	{
		Id:104820004,
		Name:"忠禮",
		Email:"joh8608233nny@gmail.com",
		Cellphone:"0923961566",
		Password:"timmy880925",
		Address:"台中市神岡區中山路478號"
	},
	DatabaseUtility.callback
);

memberManager.AddManager(
	{
		Id:104820021,
		Name:"忠禮",
		Email:"joh86082jweinny@gmail.com",
		Cellphone:"0923961566",
		Password:"timmy880925",
		Address:"台中市神岡區中山路478號"
	},
	DatabaseUtility.callback
);

memberManager.AddManager(
	{
		Id:104820027,
		Name:"忠禮",
		Email:"joh860829qewtrenny@gmail.com",
		Cellphone:"0923961566",
		Password:"timmy880925",
		Address:"台中市神岡區中山路478號"
	},
	DatabaseUtility.callback
);