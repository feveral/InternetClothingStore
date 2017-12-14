'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var OnsaleManager = require('../server/OnsaleManager.js');
var onsaleManager = new OnsaleManager();

onsaleManager.AddOnsaleRandomly(
	"開幕特賣8折",
	"2018/1/31" ,
	20,
	DatabaseUtility.callback
);
