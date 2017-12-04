
function ShowMemberMenu(){
	if($("#member > div > a").text() != '登入'){
		$("#memberMenu").css("height","160px");
		$("#memberMenu").css("padding-top","20px");
		$("#memberMenu").css("box-shadow","3px 1px 1px #666666");
	}
}

function HideMemberMenu(){
	$("#memberMenu").css("height","0px");
	$("#memberMenu").css("padding-top","0px");
	$("#memberMenu").css("box-shadow","none");		
}

$(document).ready(function(){
	$("#member div:nth-child(1)").hover(ShowMemberMenu,HideMemberMenu);
    $("#memberMenu").hover(ShowMemberMenu,HideMemberMenu);
});