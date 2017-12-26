
function GetProductByCategory(callback){
	var apiUrl = GetServerUrl() + "/product/" + categoryOrSubCategory;
	AjaxGet(apiUrl,callback);
}

function GetShoppingCar(callback){
	var apiUrl = GetServerUrl() + '/shoppingCar';
	AjaxGet(apiUrl,callback);
}

function GetIsManager(callback){
	var apiUrl = GetServerUrl() + '/member/isManager';
	AjaxGet(apiUrl,callback);
}