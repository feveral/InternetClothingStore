$(document).ready(function(){
	InitialProduct();

});


function InitialProduct(){
	var apiUrl = GetServerUrl() + "/product/" + "newproduct";
	var callback = function(msg){
		RenderProduct(msg);
	}
	AjaxGet(apiUrl,callback);
}
