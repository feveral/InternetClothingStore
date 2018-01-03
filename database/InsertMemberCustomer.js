'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var MemberManager = require('../server/MemberManager.js');
var memberManager = new MemberManager();

memberManager.AddCustomer(
	{
		Name:"胖虎",
		Email:"joh860829nny@gmail.com",
		Cellphone:"0923961566",
		Password:"AA5566",
		Address:"胖虎"
	},
	DatabaseUtility.callback
);

memberManager.AddCustomer(
	{
		Name:"customer",
		Email:"customer",
		Cellphone:"0923961566",
		Password:"customer",
		Address:"customer"
	},
	DatabaseUtility.callback
);

memberManager.AddCustomer(
	{
		Name:"大雄",
		Email:"yt2019@yahoo.com.tw",
		Cellphone:"0970981207",
		Password:"5566",
		Address:"高雄市三民區黃興路158巷36號"
	},
	DatabaseUtility.callback
);
