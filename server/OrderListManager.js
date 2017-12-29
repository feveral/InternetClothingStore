'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class OrderListManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddOrderList(attribute,callback){
		this.db.query(
			"INSERT INTO ORDERLIST" +
			"(State,Shipment,Paytype,Time,StoreName,SendAddress,CreditCardNumber,Remarks,MemberId,TotalPrice)" +
			"VALUES ( " +
			"'" + attribute['State'] +  "' , " + 
			"'" + attribute['Shipment'] +  "' , " + 
			"'" + attribute['Paytype'] +  "' , " +
			"'" + attribute['Time'] +  "' , " + 
			"'" + attribute['StoreName'] +  "' , " + 
			"'" + attribute['SendAddress'] +  "' , " + 
			"'" + attribute['CreditCardNumber'] +  "' , " + 
			"'" + attribute['Remarks'] +  "' , " + 
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
			" WHERE MemberId=" + MemberId , 
			function(err,result){
				callback(err,result);
			}
		);
	}

	GetNewestOrderListByMemberId(MemberId,callback){
		this.db.query(
			"SELECT Id FROM ORDERLIST" + 
			" WHERE MemberId=" + MemberId +
			" order by Id desc " + 
			"limit 1", 
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
			"select ORDERLIST.Id,ORDERLIST.Time,ORDERLIST.State,ORDERLIST.Shipment,ORDERLIST.Remarks from ORDERLIST,MEMBER WHERE Email='" + 
			attribute['Email'] +
			"'and ORDERLIST.MemberId = MEMBER.Id;",
			function(err,result){
				callback(err,{success:true,result:result})
			}  
		);
	}

	ListOrderDetail(attribute,callback){
		this.db.query(
			"select Name,ORDERLIST.Id,ORDERLIST.Time,ORDERLIST.State,ORDERLIST.Shipment,TotalPrice,Remarks"+
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
			"SELECT ORDERITEM.ProductId,OrderId,Quantity,PRODUCT.Name,Size,Color,Price,ONSALE.Name AS OnsaleName " + 
			"FROM ORDERITEM join PRODUCT ON ORDERITEM.ProductId = PRODUCT.Id left join ONSALE ON PRODUCT.Id=ONSALE.ProductId " + 
			"WHERE OrderId= " + 
			attribute['OrderId'] +
			" AND OrderId IN(select ORDERLIST.Id from ORDERLIST,MEMBER WHERE Email= '" +
			attribute['Email'] +  
			"' and ORDERLIST.MemberId = MEMBER.Id);",
			function(err,result){
				callback(err,{success:true,result:result})
			}  
		);
	}

	ListManagerOrderDetail(attribute,callback){
		this.db.query(
			"select Name,ORDERLIST.Id,ORDERLIST.Time,ORDERLIST.State,ORDERLIST.Shipment,TotalPrice,Remarks"+
			" from ORDERLIST join MEMBER  on  ORDERLIST.MemberId = MEMBER.Id"+
			" WHERE " + 
			"ORDERLIST.Id=" + 
			attribute['OrderId'] + ";",
			function(err,result){
				callback(err,{success:true,result:result})
			}  
		);
	}

	ListManagerOrderItem(attribute,callback){
		this.db.query(
			"SELECT ProductId,OrderId,Quantity,PRODUCT.Name,Size,Color,Price " + 
			"FROM ORDERITEM join PRODUCT on ORDERITEM.ProductId = PRODUCT.Id WHERE OrderId= " + 
			attribute['OrderId'] +
			" AND OrderId IN(select ORDERLIST.Id from ORDERLIST,MEMBER WHERE " +  
			" ORDERLIST.MemberId = MEMBER.Id);",
			function(err,result){
				callback(err,{success:true,result:result})
			}  
		);
	}

	PostManagerOrderState(attribute,callback){
		this.db.query(
			"UPDATE ORDERLIST " + 
			"SET State = " +
			"'" + attribute['State'] + "' " +
			"WHERE Id = " + 
			attribute['OrderId'] + ";",
			function(err,result){
				callback(err,{success:true,result:result})
			}  
		);
	}

	DeleteOrder(attribute,callback){
		this.db.query(
			"DELETE FROM ORDERLIST " + 
			"WHERE Id = " + 
			attribute['OrderId'] + ";",
			function(err,result){
				callback(err,{success:true,result:result})
			}  
		);
	}
}
