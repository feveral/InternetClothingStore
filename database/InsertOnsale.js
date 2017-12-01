'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var OnsaleManager = require('../server/OnsaleManager.js');
var onsaleManager = new OnsaleManager(DatabaseUtility.Getdb());

onsaleManager.AddOnsale(
	{
		ProductId: 22 ,
		Name: "開幕特賣8折",
		Date: "2017/12/8" ,
		PercentOff: 20
	},
	DatabaseUtility.callback
);