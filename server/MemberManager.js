'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class MemberManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddCustomerMember(attribute,callback){
		this.db.query(
			"INSERT INTO MEMBER " +
			"(Name,MemberType,Email,Cellphone,Password,Address)" +
			"VALUES ( " + 
			"'" + attribute['Name'] +  "' , " + 
			"'" + attribute['MemberType'] + "' , " +  
			"'" + attribute['Email'] + "' , " +  
			"'" + attribute['Cellphone'] + "' , " +  
			"'" + attribute['Password'] + "' , " +
			"'" + attribute['Address'] +  "' ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}
}