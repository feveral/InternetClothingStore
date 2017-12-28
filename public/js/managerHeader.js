$(document).ready(function(){
	InitialMemberName();
	SetLogoClick();
	InitialSelector();
	InitialMemberMenu();
});

function SetLogoClick(){
	$('#logo').click( function(){ location.href = GetServerUrl(); } );
}

function InitialMemberName(){
	GetUserName(function(msg){
		var object = JSON.parse(msg);
		if(object.success)
		{
			$('#member a:nth-child(1)').html("Hi ! " + object.data);
		}
	});
}

function InitialSelector(){
	$("#mainMenu span:nth-child(1)").hover(ShowSelector,HideSelector);
    $("#selector").hover(ShowSelector,HideSelector);
    AddSubCategoryToCategoryManager('Basic',1);
	AddSubCategoryToCategoryManager('Top',2);
	AddSubCategoryToCategoryManager('Coat',3);
	AddSubCategoryToCategoryManager('Bottom',4);
	AddSubCategoryToCategoryManager('Accessories',5);
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

function InitialMemberMenu(){
	$("#member div:nth-child(1)").hover(ShowMemberMenu,HideMemberMenu);
    $("#memberMenu").hover(ShowMemberMenu,HideMemberMenu);
}

function ShowMemberMenu(){
	if($("#member > div > a").text() != '登入'){
		$("#memberMenu").css("height","180px");
		$("#memberMenu").css("padding-top","20px");
		$("#memberMenu").css("box-shadow","3px 1px 1px #666666");
	}
}

function HideMemberMenu(){
	$("#memberMenu").css("height","0px");
	$("#memberMenu").css("padding-top","0px");
	$("#memberMenu").css("box-shadow","none");		
}
