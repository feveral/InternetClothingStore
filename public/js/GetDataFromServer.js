
function GetProductByCategory(categoryOrSubCategory,callback){
	var apiUrl = GetServerUrl() + "/product/" + categoryOrSubCategory;
	AjaxGet(apiUrl,callback);
}

function GetProductById(id,callback){
	var apiUrl = GetServerUrl() + "/product/" + id;
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

function GetNewProduct(callback){
	var apiUrl = GetServerUrl() + "/product/" + "newproduct";
	AjaxGet(apiUrl,callback);
}