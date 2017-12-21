$(document).ready(function(){

	if(window.location.hash.replace('#','') != '')
	{
		GetProduct(window.location.hash.replace('#',''));
	}
	else
	{
		InitialProduct();
	}
});

$(window).bind('hashchange', function() { 
	GetProduct(window.location.hash.replace('#',''));
}); 


function InitialProduct(){
	var apiUrl = GetServerUrl() + "/product/" + "newproduct";
	var callback = function(msg){
		RenderProduct(msg);
	}
	AjaxGet(apiUrl,callback);
}
