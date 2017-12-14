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

	// return correct or not and member information
	IsSignInCorrect(email,password,callback){

		this.GetMemberFromEmail(email,function(err,result){
			var member = result;
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

	IsRegisterOK(registerData,callback){
		this.GetMemberFromEmail(registerData.Email,function(err,result){
			var member = result;
			if(!result && registerData.Email)
			{
				console.log("success");
				callback(err,{success:true});
			}
			else if(!registerData.Email)
			{
				console.log("email");
				callback(err,{success:false,message:"the email cannot be null!"})
			}
			else
			{
				console.log("repeat");
				callback(err,{success:false,message:"the email has been registered!"})
			}
		});
	}

	// IsPasswordEmpty(registerData){
	// 	if(!registerData.Password)
	// 		return true;
	// }
}