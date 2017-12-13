'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class OrderListManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddOrderList(attribute,callback){
		this.db.query(
			"INSERT INTO ORDERLIST" +
			"(Id,State,Shipment,Paytype,Time,MemberId)" +
			"VALUES ( " +
			attribute['Id'] +  " , " + 
			"'" + attribute['State'] +  "' , " + 
			"'" + attribute['Shipment'] +  "' , " + 
			"'" + attribute['Paytype'] +  "' , " +
			"'" + attribute['Time'] +  "' , " + 
			attribute['MemberId'] +  " ); " , 
			function(err,result){
				callback(err,result);
			}  
		);
	}

	GetOrderListByMemberId(MemberId,callback){
		this.db.query(
			"SELECT * FROM ORDERLIST" + 
			"WHERE MemberId=" + MemberId , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetAllOrderList(callback){
		this.db.query(
			"SELECT * FROM ORDERLIST", 
			function(err,result){
				callback(err,result);
			}
		);	
	}
}