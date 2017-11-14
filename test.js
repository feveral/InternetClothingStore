const async = require('async');
const mysql = require('mysql');

var db = mysql.createConnection({
  	host: "localhost",
  	user: "root",
  	password: "5566",
  	database: "Shtick"
});


var fun = function(callback){

	db.query(
		"select * from Product",
		function(err,result){
			callback(err,result)
		});
}

fun(function(err,result){
	console.log(result);
})