'use strict';

const mysql = require('mysql');

var db = mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "timmy880925",
  	database: "Shtick"
});

exports.Getdb = function(){
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