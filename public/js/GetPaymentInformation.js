$(document).ready(function(){
	GetShoppingItemToPayment();
	PaymentTypeChanged();
});

function GetShoppingItemToPayment(){
	var apiUrl = GetServerUrl() + "/shoppingCar";
	var callback = function(msg){
		var object = JSON.parse(msg);
		PrintPaymentData(object['data']);
		CalculatePaymentTotal(object['data']);
	}
	AjaxGet(apiUrl,callback);
}

function PrintPaymentData(data){
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
	var totalItemNumber = 0;
	for (var index in data){
		totalPrice += data[index]['Quantity']*data[index]['Price'];
		totalItemNumber += data[index]['Quantity'];
	}
	$("#littleCount").text("共" +totalItemNumber + "件" + " 小計:$" + totalPrice);
	$("#paymentPrice").text(totalPrice);
}

function PaymentTypeChanged(){
	$("select[name='payment']").on('change',function(){
		if((this.value == 1) || (this.value == 2))
			$("#paymentPrice").text(parseInt($("#littleCount").text().split("$")[1]) + 80 );
		else
			$("#paymentPrice").text(parseInt($("#littleCount").text().split("$")[1]));
	});
}

function GoToBookingData(){
	if(($("select[name='payment']").val() != 0) && ($("select[name='shippingment']").val() != 0))
	{
		console.log("kk");
		var apiUrl =  $("select[name='payment']").val() + "?" + $("select[name='shippingment']").val();
		location.href = GetServerUrl() + "/shoppingCar.html" + "#" + apiUrl;
		var callback = function(msg){
			location.href = GetServerUrl() + "shoppingCar.html" + "#" + apiUrl;
			RenderProduct(msg);
		}
		//AjaxGet(apiUrl,callback);
	}
	else
		alert("please choose option!");
}
