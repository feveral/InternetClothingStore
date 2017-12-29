$(document).ready(function(){
	InitialMemberName();
	IfNotManagerGotoIndex();
	GetAllOrderFromServer();
});

function GetAllOrderFromServer(){
	var apiUrl = GetServerUrl() + "/order/LoadAllOrder";
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
		RenderAllOrder(object);
	}
	AjaxGet(apiUrl,callback);
}


function InitialMemberName(){
	var apiUrl = GetServerUrl() + "/login/getUserName";
	var callback = function(msg){
		var object = JSON.parse(msg);
		if(object.success)
		{
			$('#member a:nth-child(1)').html("Hi ! " + object.data);
		}
	}
	AjaxGet(apiUrl,callback);
}