$(document).ready(function(){
	GetShoppingItemToLastCheck();
	GetMemberInformationToLastCheck();
});

function GetShoppingItemToLastCheck(){
	var apiUrl = GetServerUrl() + "/shoppingCar";
	var callback = function(msg){
		var object = JSON.parse(msg);
		PrintShopppingCarItemInLastCheck(object['data']);
		CalculatePaymentTotal(object['data']);
	}
	AjaxGet(apiUrl,callback);
}

function GetMemberInformationToLastCheck(){
	var apiUrl = GetServerUrl() + "/member/getMemberInformation";
	var callback = function(msg){
		var object = JSON.parse(msg);
		PrintMemberInformationInLastCheck(object['result']);
	}
	AjaxGet(apiUrl,callback);
}

function PrintShopppingCarItemInLastCheck(data){
	for (var index in data){
		$("#detail").append(
			"<div>" + 
			"<span>" + data[index]['Id'] + "</span>" +
			"<span>" + data[index]['Name'] + "</span>" +
			"<span>" + data[index]['Size'] + "</span>" +
			"<span>" + data[index]['Quantity'] + "</span>" +
			"<span>" + data[index]['Price'] + "</span>" +
			"<span>" + data[index]['Quantity']*data[index]['Price'] + "</span>" +
			"</div>");
	}
}

function CalculatePaymentTotal(data){
	var totalPrice = 0;
	for (var index in data){
		totalPrice += data[index]['Quantity']*data[index]['Price'];
	}
	$("#littleCount>div:nth-child(2)").text("付款資料 : " + totalPrice + "元");
	$("#creditCardTotalPay>p:nth-child(2)").text(totalPrice);

}

function PrintMemberInformationInLastCheck(memberdata){
	$("#information>div:nth-child(2)>p:nth-child(2)").text(memberdata['Email']);
	$("#information>div:nth-child(4)>input").val(memberdata['Cellphone']);
	$("#information>div:nth-child(5)>input").val(memberdata['Address']);
	var nowHtml = location.href;
	var shipType = nowHtml.split('#')[1].split('?')[1];
	var PayType =  nowHtml.split('#')[1].split('?')[0];
	if(PayType == 2){
		$("#information>div:nth-child(3)>p:nth-child(2)").text("7-11取貨");
	}
}