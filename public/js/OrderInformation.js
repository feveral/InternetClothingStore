$(document).ready(function(){
	IfNotMemberGotoMemberPage()
	var orderId = location.hash.split('#')[1];
	GetOrderDetail(orderId);
	GetOrderItem(orderId);
});

function GetOrderDetail(orderId){
	var apiUrl = GetServerUrl() + "/order/LoadOrderDetail";
	var data = 
	{
		OrderId:orderId,
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
		PrintDetail(object.result);
	}
	AjaxPost(apiUrl,data,callback);
}

function GetOrderItem(orderId){
	var apiUrl = GetServerUrl() + "/order/LoadOrderItem";
	var data = 
	{
		OrderId:orderId,
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
		PrintShoppingItem(object.result);
	}
	AjaxPost(apiUrl,data,callback);
}
