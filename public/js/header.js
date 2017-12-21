$(document).ready(function(){
	InitialMemberName();
	InitialSelector();
	InitialMemberMenu();
	InitialShoppingCarHover();
	SetNewButtonProductClick();
	SetSaleButtonProductClick();
	SetLogoClick();
});

function SetLogoClick(){
	$('#logo').click( function(){ location.href = GetServerUrl(); } );
}

function SetNewButtonProductClick(){
	$("#mainMenu span:nth-child(3)").click(function(){
		var apiUrl = GetServerUrl() + "/product/" + "newproduct";
		var callback = function(msg){
			location.href = GetServerUrl() + "#" +"newproduct";
			RenderProduct(msg);
		}
		AjaxGet(apiUrl,callback);
	});
}

function SetSaleButtonProductClick(){
	$("#mainMenu span:nth-child(2)").click(function(){
		var apiUrl = GetServerUrl() + "/product/" + "onsaleproduct";
		var callback = function(msg){
			location.href = GetServerUrl() + "#" +"onsaleproduct";
			RenderProduct(msg);
		}
		AjaxGet(apiUrl,callback);
	});
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