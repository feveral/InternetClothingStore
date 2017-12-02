
function ShowMemberMenu(){
	if($("#member > div > a").text() != '登入'){
		$("#memberMenu").css("height","160px");
		$("#memberMenu").css("padding-top","20px");
	}
}

function HideMemberMenu(){
	 $("#memberMenu").css("height","0px");
	 $("#memberMenu").css("padding-top","0px");
}

$(document).ready(function(){
	$("#member div:nth-child(1)").hover(ShowMemberMenu,HideMemberMenu);
    $("#memberMenu").hover(ShowMemberMenu,HideMemberMenu);
});