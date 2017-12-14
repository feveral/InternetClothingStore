'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class OrderListManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddOrderList(attribute,callback){
		this.db.query(
			"INSERT INTO ORDERLIST" +
			"(Id,State,Shipment,Paytype,Time,MemberId,TotalPrice)" +
			"VALUES ( " +
			attribute['Id'] +  " , " + 
			"'" + attribute['State'] +  "' , " + 
			"'" + attribute['Shipment'] +  "' , " + 
			"'" + attribute['Paytype'] +  "' , " +
			"'" + attribute['Time'] +  "' , " + 
			attribute['MemberId'] +  " , " + 
			attribute['TotalPrice'] + " ); " , 
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
	ListOrderList(attribute,callback){
		this.db.query(
			"select ORDERLIST.Id,ORDERLIST.Time,ORDERLIST.State,ORDERLIST.Shipment from ORDERLIST,MEMBER WHERE Email='" + 
			attribute['Email'] +
			"'and ORDERLIST.MemberId = MEMBER.Id;",
			function(err,result){
				callback(err,{success:true,result:result})
			}  
		);
	}

	ListOrderDetail(attribute,callback){
		this.db.query(
			"select Name,ORDERLIST.Id,ORDERLIST.Time,ORDERLIST.State,ORDERLIST.Shipment,TotalPrice"+
			" from ORDERLIST join MEMBER  on  ORDERLIST.MemberId = MEMBER.Id"+
			" WHERE Email='" + 
			attribute['Email'] +
			"'and ORDERLIST.Id=" + 
			attribute['OrderId'] + ";",
			function(err,result){
				callback(err,{success:true,result:result})
			}  
		);
	}

	ListOrderItem(attribute,callback){
		this.db.query(
			"SELECT ProductId,OrderId,Quantity,PRODUCT.Name,Size,Color,Price " + 
			"FROM ORDERITEM join PRODUCT on ORDERITEM.ProductId = PRODUCT.Id WHERE OrderId= " + 
			attribute['OrderId'] +
			" AND OrderId IN(select ORDERLIST.Id from ORDERLIST,MEMBER WHERE Email= '" +
			attribute['Email'] +  
			"' and ORDERLIST.MemberId = MEMBER.Id);",
			function(err,result){
				callback(err,{success:true,result:result})
			}  
		);
	}
}
