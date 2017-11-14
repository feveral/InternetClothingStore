'use strict';

const mysql = require('mysql');

var db = mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "5566",
  	database: "Shtick"
});

exports.ExecuteSQLCommand = function(command){
	db.query(command,function(err , result){
		if(err)
			console.log(err);
		else
			console.log(result);
	});
}

exports.InsertProduct = function(attribute){

	var command = 
		"INSERT INTO PRODUCT " + 
		"VALUES ( " + 
		"'" + attribute['Id'] + "' , " +  
		"'" + attribute['ManagerId'] + "' , " + 
		"'" + attribute['Name'] +  "' , " + 
		attribute['Price'] + " , " +  
		"'" + attribute['Color'] + "' , " +  
		"'" + attribute['Size'] + "' , " +  
		attribute['Stock'] + " , " +
		"'" + attribute['Category'] +  "' , " + 
		"'" + attribute['SubCategory'] + "' , " +  
		"'" + attribute['ImagePath'] + "' ); ";  

	exports.ExecuteSQLCommand(command)
}

exports.IterateInsertProduct = function(attribute,id,color,size){
	for(let c in color)
		for(let s in size){
			attribute['Id'] = attribute["SubCategory"] + exports.PadLeft( (Number(c)*Number(size.length)+Number(s)+Number(id)).toString());
			attribute['Color'] = color[c];
			attribute['Size'] = size[s];
			attribute['Stock'] = Math.floor((Math.random() * 100) + 1);
			attribute['ImagePath'] = './image/' + attribute["SubCategory"] + exports.PadLeft( (Number(c)*Number(size.length)+Number(id)).toString()) + '.jpg';
			exports.InsertProduct(attribute);
		}	
}

//不足五位數的字串 左方補0
exports.PadLeft = function(str){
	if(str.length >= 5)
		return str;
	else
		return exports.PadLeft("0" +str,5);
}
