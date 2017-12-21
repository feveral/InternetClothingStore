
function GetShoppingCar(callback){
	var apiUrl = GetServerUrl() + '/shoppingCar';
	AjaxGet(apiUrl,callback);
}


