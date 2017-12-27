
function GetShoppingCar(callback){
	var apiUrl = GetServerUrl() + '/shoppingCar';
	AjaxGet(apiUrl,callback);
}

function GetFavorite(callback){
	var apiUrl = GetServerUrl() + '/favorite';
	AjaxGet(apiUrl,callback);
}
