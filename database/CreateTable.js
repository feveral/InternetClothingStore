'use strict';

var Database = require('./ConnectDatabase.js');

var createProduct = 
	"CREATE TABLE PRODUCT" + 
	 	"(Id VARCHAR(30) NOT NULL," + 
	 	"ManagerId VARCHAR(30) NOT NULL, " + 
	 	"Name VARCHAR(30) CHARACTER SET utf8, " + 
	 	"Price INT ," + 
	 	"Color VARCHAR(10) ," +
	 	"Size VARCHAR(5) ," + 
	 	"Stock INT ," + 
	 	"Category VARCHAR(15) ," + 
	 	"SubCategory VARCHAR(15) ," + 
	 	"ImagePath VARCHAR(255) ," +
	    "PRIMARY KEY (Id)" + 
	");";

Database.ExecuteSQLCommand(createProduct);

