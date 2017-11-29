'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var MemberManager = require('../server/MemberManager.js');
var memberManager = new MemberManager(DatabaseUtility.Getdb());

memberManager.AddCustomerMember(
	{
		Name:"胖虎",
		MemberType:"Customer",
		Email:"joh860829nny@gmail.com",
		Cellphone:"0923961566",
		Password:"AA5566",
		Address:"胖虎"
	},
	DatabaseUtility.callback
);