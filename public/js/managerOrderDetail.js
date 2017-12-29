$(document).ready(function(){
	IfNotManagerGotoIndex();
	var orderId = location.hash.split('#')[1];
	console.log(orderId);
	GetManagerOrderDetail(orderId);
	GetManagerOrderItem(orderId);
	ChangeOrderState();
});

function GetManagerOrderDetail(orderId){
	var apiUrl = GetServerUrl() + "/order/LoadManagerOrderDetail";
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

function GetManagerOrderItem(orderId){
	var apiUrl = GetServerUrl() + "/order/LoadManagerOrderItem";
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

function PostManagerOrderState(){
	var apiUrl = GetServerUrl() + "/order/PostManagerOrderState";
	var data = 
	{
		OrderId:$('#orderNumber').text(),
		State:$("#order>div>select option:selected").text(),
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
	}
	AjaxPost(apiUrl,data,callback);
}

function ChangeOrderState(){
	$("#order>div>select").on('change',function(){
		PostManagerOrderState();
	});
}

