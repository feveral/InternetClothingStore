'use strict';

const mysql = require('mysql');

var db = mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "timmy880925",
});

exports.Getdb = function(){
	exports.ExecuteSQLCommandWithoutLog("use Shtick;");
	return db;
}

exports.ExecuteSQLCommand = function(command){
	db.query(command,function(err , result){
		if(err)
			console.log(err);
		else
		 	console.log(result);
	});
}

exports.ExecuteSQLCommandWithoutLog = function(command){
	db.query(command,function(err , result){

	});
}

exports.callback = function(err,result){
	if(err)
		console.log(err);
	else
		console.log(result);
}
