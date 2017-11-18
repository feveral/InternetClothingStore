'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');


var dropTableProduct = 
	"DROP TABLE IF EXISTS PRODUCT;"
var createProduct = 
	"CREATE TABLE PRODUCT" + 
	 	"(Id INT NOT NULL AUTO_INCREMENT, " + 
	 	"ManagerId INT NOT NULL, " +
	 	"Name VARCHAR(30) CHARACTER SET utf8 NOT NULL, " + 
	 	"Price INT ," + 
	 	"Color VARCHAR(10) CHARACTER SET utf8 NOT NULL," +
	 	"Size VARCHAR(5) NOT NULL," + 
	 	"Stock INT ," + 
	 	"Category VARCHAR(15) CHARACTER SET utf8," + 
	 	"SubCategory VARCHAR(15) CHARACTER SET utf8," + 
	 	"ImagePath VARCHAR(255) CHARACTER SET utf8 ," +
	    "PRIMARY KEY (Id)" + 
	");";

DatabaseUtility.ExecuteSQLCommand(dropTableProduct);
DatabaseUtility.ExecuteSQLCommand(createProduct);