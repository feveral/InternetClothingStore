

/* Login.html */ 

function ClickRegister(){
	if(IsAllDataNotNull() && IsPassWordEqual())
		Register();
}

function ClickOtherAccountButton(){
	var apiUrl = GetServerUrl() + "/login/logout";
	var callback = function(msg){
		location.href = GetServerUrl() + "/login.html";
	}
	AjaxGet(apiUrl,callback);
}

function ClickMemberButton(){
	var apiUrl = GetServerUrl() + "/login/getUserName";
	var callback = function(msg){
		if((JSON.parse(msg)).success)
			location.href = GetServerUrl() + "/memberCenter";
		else
			location.href = GetServerUrl() + "/login.html";
	}
	AjaxGet(apiUrl,callback);
}

/*managerOrderDetail.js*/
function DeleteOrder(){
	$("#OrderList>div>span>img").click(function(){
	console.log("123");
	console.log($(this).parent().prev().prev().prev().prev().prev().prev().text());
	var orderId = $(this).parent().prev().prev().prev().prev().prev().prev().text();
	var data = 
	{
		OrderId : orderId,
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
	}
	DeleteOrderFromManager(data,callback);
	location.href = GetServerUrl() + "/managerOrder.html";
	});
}