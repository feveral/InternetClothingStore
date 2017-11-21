'use strict';

const mysql = require('mysql');

var db = mysql.createConnection({
  	host: "localhost",
  	user: "root",
<<<<<<< HEAD
  	password: "timmy880925",
=======
  	password: "5566",
>>>>>>> 7edb86a3a13a69f18c2ba3ecb5a1658225456cbf
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

exports.callback = function(err,result){
	if(err)
		console.log(err)
	else
		console.log(result)
}
