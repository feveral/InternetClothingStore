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