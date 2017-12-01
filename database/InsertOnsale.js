'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var OnsaleManager = require('../server/OnsaleManager.js');
var onsaleManager = new OnsaleManager(DatabaseUtility.Getdb());

onsaleManager.AddOnsale(
	{
		ProductId: 22 ,
		Date: "2017/12/8" ,
		Price: 200
	},
	DatabaseUtility.callback
);