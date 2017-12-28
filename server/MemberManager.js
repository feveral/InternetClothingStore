'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class MemberManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddCustomer(attribute,callback){
		this.db.query(
			"INSERT INTO MEMBER " +
			"(Name,MemberType,Email,Cellphone,Password,Address)" +
			"VALUES ( " + 
			"'" + attribute['Name'] +  "' , " + 
			"'" + "Customer" + "' , " +  
			"'" + attribute['Email'] + "' , " +  
			"'" + attribute['Cellphone'] + "' , " +  
			"'" + attribute['Password'] + "' , " +
			"'" + attribute['Address'] +  "' ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}

	AddManager(attribute,callback){
		this.db.query(
			"INSERT INTO MEMBER " +
			"(Id,Name,MemberType,Email,Cellphone,Password,Address)" +
			"VALUES ( " + 
			attribute['Id'] + " , " + 
			"'" + attribute['Name'] +  "' , " + 
			"'" + "Manager" + "' , " +  
			"'" + attribute['Email'] + "' , " +  
			"'" + attribute['Cellphone'] + "' , " +  
			"'" + attribute['Password'] + "' , " +
			"'" + attribute['Address'] +  "' ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}

	GetMemberFromEmail(email,callback){
		this.db.query(
			"SELECT * " + 
			"FROM MEMBER " +  
			"WHERE Email=" + "'" + email + "'" + ";",
			function(err,result){
				callback(err,result[0]);
			}
		);
	}

	IsManager(email,callback){

		this.GetMemberFromEmail(email,function(err,result){
			if(err || result === undefined)
			{
				callback(err,false);
			}
			else if(result.Membertype != 'Manager')
			{
				callback(err,false);
			}
			else(result.Membertype === 'Manager')
			{
				callback(err,true);
			}
		});
	}

	// return correct or not and member information
	IsSignInCorrect(email,password,callback){

		this.GetMemberFromEmail(email,function(err,result){
			if(!result)
			{
				callback(err,{success:false,user:result});
			}
			else if(result.Password === password)
			{
				callback(err,{success:true,user:result})
			}
			else
			{
				callback(err,{success:false,user:result});
			}
		});
	}

	UpdateMemberInformation(attribute,callback){
		this.db.query(
			"UPDATE MEMBER " +
			"SET Name=" + 
			"'" + attribute['Name'] + "', " + 
			" Cellphone =" + 
			"'" + attribute['Cellphone'] +  "' , " + 
			" Address=" + 
			"'" + attribute['Address'] + "'" + 
			" WHERE Email=" + 
			"'" + attribute['Email'] +  "' ; " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}

	UpdateMemberPassword(attribute,callback){
		this.db.query(
			"UPDATE MEMBER " +
			"SET Password=" + 
			"'" + attribute['NewPassword'] + "' " + 
			" WHERE Email=" + 
			"'" + attribute['Email'] +  "' " + 
			" AND Password=" + 
			"'" + attribute['OriginPassword'] +  "';", 
			function(err,result){
				callback(err,result);
			}  
		);
	}
}
