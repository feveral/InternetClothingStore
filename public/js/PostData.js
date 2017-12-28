function UpdateProductPriceStock(data,callback){
	var apiUrl = GetServerUrl() + "/product/update";
	AjaxPost(apiUrl,data,callback);
}

function DeleteProductByNameColor(data,callback){
	var apiUrl = GetServerUrl() + "/product/delete";
	AjaxPost(apiUrl,data,callback);
}