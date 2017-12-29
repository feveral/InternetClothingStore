$(document).ready(function(){
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


