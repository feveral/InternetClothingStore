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

function InitialMemberMenu(){
	$("#member div:nth-child(1)").hover(ShowMemberMenu,HideMemberMenu);
    $("#memberMenu").hover(ShowMemberMenu,HideMemberMenu);
}


function ShowMemberMenu(){
	if($("#member > div > a").text() != '登入'){
		$("#memberMenu").css("height","200px");
		$("#memberMenu").css("padding-top","20px");
		$("#memberMenu").css("box-shadow","3px 1px 1px #666666");
	}
}

function HideMemberMenu(){
	$("#memberMenu").css("height","0px");
	$("#memberMenu").css("padding-top","0px");
	$("#memberMenu").css("box-shadow","none");
}
