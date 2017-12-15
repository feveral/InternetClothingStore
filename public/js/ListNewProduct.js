$(document).ready(function(){
	$("#mainMenu span:nth-child(3)").click(function(){
		var apiUrl = GetServerUrl() + "/product/" + "newproduct";
		var callback = function(msg){
			location.href = GetServerUrl() + "#" +"newproduct";
			RenderProduct(msg);
		}
		AjaxGet(apiUrl,callback);
	});
});