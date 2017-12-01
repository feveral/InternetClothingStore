'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');
var FavoriteManager = require('../server/FavoriteManager.js');
var favoriteManager = new FavoriteManager(DatabaseUtility.Getdb());

favoriteManager.AddFavorite(
	{
		ProductId:22,
		MemberId:104820004
	},
	DatabaseUtility.callback
);