$(document).ready(function(){
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
		PrintShoppingItem(object.result);
	}
	AjaxPost(apiUrl,data,callback);
}

function PrintDetail(result){
	$("#orderNumber").text(result[0]['Id']);
	$("#receiver").text(result[0]['Name']);
	$("#data").text(result[0]['Time'].split("T")[0]);
	$("#state").text(result[0]['State']);
	$("#shipment").text(result[0]['Shipment']);
	$("#price").text(result[0]['TotalPrice']);
}

function PrintShoppingItem(result){
	var processedResult = []; 
	for(var r in result){
		var id = result[r]['Name'];
		$("#shoppingData").append(
		"<div> " + 
		"<span>" + result[r]['ProductId'] + "</span>" +
		"<span>" + result[r]['Name'] + "</span>" +
		"<span>" + result[r]['Color'] + "</span>" +
		"<span>" + result[r]['Size'] + "</span>" +
		"<span>" + result[r]['Quantity'] + "</span>" +
		"<span>" + " no " + "</span>" +
		"<span>" + result[r]['Price'] + "</span>" +
		"<span>" + " .. " + "</span>" +
		"</div>");
	}
}