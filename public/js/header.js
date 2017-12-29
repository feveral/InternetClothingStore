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
			RenderCustomerProduct(msg);
		}
		AjaxGet(apiUrl,callback);
	});
}

function SetSaleButtonProductClick(){
	$("#mainMenu span:nth-child(2)").click(function(){
		var apiUrl = GetServerUrl() + "/product/" + "onsaleproduct";
		var callback = function(msg){
			location.href = GetServerUrl() + "#" +"onsaleproduct";
			RenderCustomerProduct(msg);
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

function InitialSelector(){
	$("#mainMenu span:nth-child(1)").hover(ShowSelector,HideSelector);
    $("#selector").hover(ShowSelector,HideSelector);
    AddSubCategoryToCategory('Basic',1);
	AddSubCategoryToCategory('Top',2);
	AddSubCategoryToCategory('Coat',3);
	AddSubCategoryToCategory('Bottom',4);
	AddSubCategoryToCategory('Accessories',5);
}

function ShowSelector(){
	 $("#selector").css("height","400px");
	 $("#selector").css("padding-top","30px");
	 $("#selector").css("box-shadow","1px 1px 1px #666666");
}

function HideSelector(){
	 $("#selector").css("height","0px");
	 $("#selector").css("padding-top","0px");
	 $("#selector").css("box-shadow","none");
}


function InitialShoppingCarHover(){
	$('#member > a').hover(ShowShoppingCarHover,HideShoppingCarHover);
	$('#shoppingCar').hover(ShowShoppingCarHover,HideShoppingCarHover);
	GetShoppingCar(RenderShoppingCarHover);
}

function ShowShoppingCarHover(){
	$('#shoppingCar').css('height','450px');
}

function HideShoppingCarHover(){
	$('#shoppingCar').css('height','0px');	
}


function InitialMemberMenu(){
	$("#member div:nth-child(1)").hover(ShowMemberMenu,HideMemberMenu);
    $("#memberMenu").hover(ShowMemberMenu,HideMemberMenu);
}


function ShowMemberMenu(){
	if($("#member > div > a").text() != '登入'){
		$("#memberMenu").css("height","225px");
		$("#memberMenu").css("padding-top","20px");
		$("#memberMenu").css("box-shadow","3px 1px 1px #666666");
	}
}

function HideMemberMenu(){
	$("#memberMenu").css("height","0px");
	$("#memberMenu").css("padding-top","0px");
	$("#memberMenu").css("box-shadow","none");
}
