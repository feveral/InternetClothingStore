$(document).ready(function(){
	GetShoppingItemToLastCheck();
	GetMemberInformationToLastCheck();
	ClickCheckout();
});

function GetShoppingItemToLastCheck(){
	var apiUrl = GetServerUrl() + "/shoppingCar";
	var callback = function(msg){
		var object = JSON.parse(msg);
		RenderShopppingCarItemInLastCheck(object['data']);
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

function PostOrderToServer(){
	var apiUrl = GetServerUrl() + "/order/postOrder";
	var data = 
	{
		State:"處理中",
		Shiptype:($("#payment>div:nth-child(2)>p:nth-child(2)").text()),
		Paytype:($("#information>div:nth-child(3)>p:nth-child(2)").text()),
		CreditCardNumber:($("#payment>div:nth-child(2)>input").val()),
		Time:GetDateTime(),
		StoreName:($("#information>div:nth-child(3)>select").val()),
		SendAddress:($("#information>div:nth-child(5)>input").val()),
		Remarks:($("#information>div>textarea").val()),
	};
	data = MakeDataNull(data);
	var callback = function(msg){
		console.log(msg);
		var object = JSON.parse(msg);
		console.log(object);
	}
	if(CheckDataNull(data)){
		AjaxPost(apiUrl,data,callback);
		location.href = GetServerUrl() + "/finishShopping.html";
	}
}

function MakeDataNull(data){
	var nowHtml = location.href;
	var shipType = nowHtml.split('#')[1].split('?')[1];
	var payType =  nowHtml.split('#')[1].split('?')[0];

	if(payType == 1)
		data['CreditCardNumber'] = "NULL";

	if(shipType == 1)
		data['StoreName'] = "NULL";
	else
		data['SendAddress'] = "NULL";

	return data;
}

function CheckDataNull(data){
	var nowHtml = location.href;
	var shipType = nowHtml.split('#')[1].split('?')[1];
	var payType =  nowHtml.split('#')[1].split('?')[0];
	console.log(data['CreditCardNumber']);
	if(payType == 2)
		if(!data['CreditCardNumber'])
			alert("CreditCardNumber!");
	console.log("777");
	if(shipType == 1)
		if(!data['SendAddress'])
			alert("ADDRESS!");
	return (!!data['CreditCardNumber'])&&(!!data['SendAddress']);
}

function CalculatePaymentTotal(data){
	var totalPrice = 0;
	for (var index in data){
		totalPrice += data[index]['Quantity']*data[index]['Price'];
	}
	$("#littleCount>div:nth-child(2)").text("付款資料 : " + (parseInt(totalPrice) + 80) + "元");
	$("#creditCardTotalPay>p:nth-child(2)").text((parseInt(totalPrice) + 80));

}

function PrintMemberInformationInLastCheck(memberdata){
	$("#information>div:nth-child(2)>p:nth-child(2)").text(memberdata['Email']);
	$("#information>div:nth-child(4)>input").val(memberdata['Cellphone']);
	$("#information>div:nth-child(5)>input").val(memberdata['Address']);
	var nowHtml = location.href;
	var shipType = nowHtml.split('#')[1].split('?')[1];
	var PayType =  nowHtml.split('#')[1].split('?')[0];
	if(PayType == 1){
		$("#information>div:nth-child(3)>p:nth-child(2)").text("7-11取貨");
		$("#payment>div:nth-child(2)>p:nth-child(2)").text("7-11取貨付款");
		$("#information>div:nth-child(3)").append(AppendStoreLocation());
	}
	else{
		$("#payment>div:nth-child(2)").append(AppendCreditCardNumber());
		if(shipType == 2)
		{
			$("#information>div:nth-child(3)>p:nth-child(2)").text("7-11取貨");
			$("#information>div:nth-child(3)").append(AppendStoreLocation());
		}
	}
}

function ClickCheckout(){
	$("#functionButton>a:nth-child(2)").click(function(){
		if(LastCheckProductQuantity())
			PostOrderToServer();
	});
}

function GetDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
}

function LastCheckProductQuantity(){
	var IsAllProductEnough = true;
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
		if(!object['success'])
		{
			IsAllProductEnough = false;
			alert("sorry!" + object['data'][0]['Name'] + object['data'][0]['Color'] + object['data'][0]['Size'] +
			 "只有" +   object['data'][0]['Stock'] + "件");
		}
	} 	
	CheckProductQuantityIfEnough(callback);
	return IsAllProductEnough;
}