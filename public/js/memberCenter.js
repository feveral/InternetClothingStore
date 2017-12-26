$(document).ready(function(){
	GetMemberInformationToCenter();
	
});


function GetMemberInformationToCenter(){
	var apiUrl = GetServerUrl() + "/member/getMemberInformation";
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
		RenderMemberInformation(object['result']);
	}
	AjaxGet(apiUrl,callback);
}

function PostModufyMemberInformation(){
	var apiUrl = GetServerUrl() + "/member/getMemberInformation";
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
		RenderMemberInformation(object['result']);
	}
	AjaxGet(apiUrl,callback);
}

function RenderMemberInformation(memberdata){
	$("#memberData>div:nth-child(2)>input").val(memberdata['Name']);
	$("#memberData>div:nth-child(3)>input").val(memberdata['Cellphone']);
	$("#memberData>div:nth-child(4)>input").val(memberdata['Email']);
	$("#memberData>div:nth-child(5)>input").val(memberdata['Address']);
}

function ClickModifyButton(){
	$("#modifyButton").click(){

	}
}
