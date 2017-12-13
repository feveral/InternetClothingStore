'use strict';

var DatabaseUtility = require('./DatabaseUtility.js');

var dropDatabaseShtick =
	"DROP DATABASE IF EXISTS Shtick;"

var createDatabaseShtick =
	"CREATE DATABASE Shtick;"

var useShtick = 
	"USE Shtick;";

var dropTableProduct =
	"DROP TABLE IF EXISTS PRODUCT;"

var dropTableMember =
	"DROP TABLE IF EXISTS MEMBER;"

var dropTableShoppingCar =
	"DROP TABLE IF EXISTS SHOPPINGCAR;"

var dropTableFavorite =
	"DROP TABLE IF EXISTS FAVORITE;"

var dropTableOnSale =
	"DROP TABLE IF EXISTS ONSALE;"

var dropTableOrderList =
	"DROP TABLE IF EXISTS ORDERLIST;"

var dropTableOrderItem =
	"DROP TABLE IF EXISTS ORDERITEM;"

var dropTableMember =
	"DROP TABLE IF EXISTS MEMBER;"

var createMember =
	"CREATE TABLE MEMBER" +
		"(Id INT NOT NULL AUTO_INCREMENT , " +
		"Name VARCHAR(50) CHARACTER SET utf8 NOT NULL , " +
		"Membertype VARCHAR(50) NOT NULL , " +
		"Email VARCHAR(255) NOT NULL UNIQUE, " +
		"Cellphone VARCHAR(10) NOT NULL ," +
		"Password VARCHAR(255) NOT NULL ," +
		"Address VARCHAR(255) CHARACTER SET utf8 ," +
		"PRIMARY KEY (Id)" +
	");";

var createProduct =
	"CREATE TABLE PRODUCT" +
	 	"(Id INT NOT NULL AUTO_INCREMENT, " +
	 	"ManagerId INT NOT NULL, " +
	 	"Name VARCHAR(30) CHARACTER SET utf8 NOT NULL," +
	 	"Price INT NOT NULL ," +
	 	"Color VARCHAR(10) CHARACTER SET utf8 NOT NULL," +
	 	"Size VARCHAR(5) NOT NULL," +
	 	"Stock INT NOT NULL ," +
	 	"Category VARCHAR(15) CHARACTER SET utf8 NOT NULL , " +
	 	"SubCategory VARCHAR(15) CHARACTER SET utf8 NOT NULL , " +
	 	"Date DATE NOT NULL , " +
	 	"ImagePath VARCHAR(255) CHARACTER SET utf8 NOT NULL , " +
	    "PRIMARY KEY (Id) ," +
	    "FOREIGN KEY(ManagerId) REFERENCES MEMBER(Id) " +
	");";

var createShoppingCar = 
	"CREATE TABLE SHOPPINGCAR" + 
		"(ProductId INT NOT NULL , " + 
		"MemberId INT NOT NULL , " + 
		"Quantity INT NOT NULL , " +
		"PRIMARY KEY(ProductId,MemberId) , " +
		"FOREIGN KEY(ProductId) REFERENCES PRODUCT(Id) , " +
		"FOREIGN KEY(MemberId) REFERENCES MEMBER(Id)" +
	");";

var createFavorite = 
	"CREATE TABLE FAVORITE" + 
		"(ProductId INT NOT NULL , " + 
		"MemberId INT NOT NULL , " +
		"PRIMARY KEY(ProductId,MemberId) , " +
		"FOREIGN KEY(ProductId) REFERENCES PRODUCT(Id) , " +
		"FOREIGN KEY(MemberId) REFERENCES MEMBER(Id)" +
	");";

var createOnSale = 
	"CREATE TABLE ONSALE" + 
		"(ProductId INT NOT NULL , " + 
		"Name VARCHAR(50) CHARACTER SET utf8 NOT NULL , " + 
		"Date DATE NOT NULL , " +
		"PercentOff INT NOT NULL , " + 
		"PRIMARY KEY(Name,ProductId) , " +
		"FOREIGN KEY(ProductId) REFERENCES PRODUCT(Id)" +
	");";

var createOrderList = 
	"CREATE TABLE ORDERLIST" + 
		"(Id INT NOT NULL AUTO_INCREMENT , " +
		"State VARCHAR(10) NOT NULL ," +
		"Shipment VARCHAR(10) NOT NULL , " + 
		"Paytype VARCHAR(10) NOT NULL , " +
		"Time DATE NOT NULL , " + 
		"MemberId INT NOT NULL , " +  
		"TotalPrice INT NOT NULL , " + 
		"PRIMARY KEY (Id) , " +
		"FOREIGN KEY(MemberId) REFERENCES MEMBER(Id)" +
	");";

var createOrderItem = 
	"CREATE TABLE ORDERITEM" + 
		"(ProductId INT NOT NULL , " + 
		"OrderId INT NOT NULL , " +
		"QUANTITY INT NOT NULL , " + 
		"PRIMARY KEY (ProductId,OrderId) , " +
		"FOREIGN KEY(ProductId) REFERENCES PRODUCT(Id) , " +
		"FOREIGN KEY(OrderId) REFERENCES ORDERLIST(Id) " +
	");";

DatabaseUtility.ExecuteSQLCommand(dropDatabaseShtick);
DatabaseUtility.ExecuteSQLCommand(createDatabaseShtick);

DatabaseUtility.ExecuteSQLCommand(useShtick);

DatabaseUtility.ExecuteSQLCommand(dropTableMember);
DatabaseUtility.ExecuteSQLCommand(createMember);

DatabaseUtility.ExecuteSQLCommand(dropTableProduct);
DatabaseUtility.ExecuteSQLCommand(createProduct);

DatabaseUtility.ExecuteSQLCommand(dropTableShoppingCar);
DatabaseUtility.ExecuteSQLCommand(createShoppingCar);

DatabaseUtility.ExecuteSQLCommand(dropTableFavorite);
DatabaseUtility.ExecuteSQLCommand(createFavorite);

DatabaseUtility.ExecuteSQLCommand(dropTableOnSale);
DatabaseUtility.ExecuteSQLCommand(createOnSale);

DatabaseUtility.ExecuteSQLCommand(dropTableOrderList);
DatabaseUtility.ExecuteSQLCommand(createOrderList);

DatabaseUtility.ExecuteSQLCommand(dropTableOrderItem);
DatabaseUtility.ExecuteSQLCommand(createOrderItem);
