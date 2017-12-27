$(document).ready(function(){
	GetMemberInformationToCenter();
	ClickModifyDataButton();
	ClickModifyPasswordButton();
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

function PostModifyMemberInformation(){
	var apiUrl = GetServerUrl() + "/member/modify";
	var data = 
	{
		Cellphone: ($('input[name=phoneNumber]').val()),
		Name: ($('input[name=name]').val()),
		Address: $('input[name=address]').val(),
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
		if(object['success'])
			alert("修改資料成功");
		else
			alert("修改資料失敗");
	}
	AjaxPost(apiUrl,data,callback);
}

function PostModifyPassword(){
	var apiUrl = GetServerUrl() + "/member/modifyPassword";
	console.log(($('input[name=enterOriginPassword]').val()));
	console.log(($('input[name=modifyPassword]').val()));
	var data = 
	{
		OriginPassword: ($('input[name=enterOriginPassword]').val()),
		NewPassword: ($('input[name=modifyPassword]').val()),
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
		console.log(object['result']['affectedRows']);
		if(object['result']['affectedRows']!=0)
			alert("修改密碼成功");
		else
			alert("修改密碼失敗");
		CleanPassword();
	}
	AjaxPost(apiUrl,data,callback);
}

function CleanPassword(){
	$('input[name=enterOriginPassword]').val("");
	$('input[name=modifyPassword]').val("");
	$('input[name=checkPassword]').val("");
}

function RenderMemberInformation(memberdata){
	$("#memberData>div:nth-child(1)>h1").text(memberdata['Email']);
	$("#memberData>div:nth-child(2)>input").val(memberdata['Name']);
	$("#memberData>div:nth-child(3)>input").val(memberdata['Cellphone']);
	$("#memberData>div:nth-child(4)>input").val(memberdata['Address']);
}

function ClickModifyDataButton(){
	$("#modifyButton").click(function(){
		PostModifyMemberInformation();
	});
}

function ClickModifyPasswordButton(){
	$("#modifyPasswordButton").click(function(){
		if(($("#changePasswordMain>div>div:nth-child(2)>input").val()!=$("#changePasswordMain>div>div:nth-child(3)>input").val()))
			alert("確認密碼不一致！");
		else if($("#changePasswordMain>div>div:nth-child(2)>input").val() == "")
			alert("密碼不准空白！");
		else 
			PostModifyPassword();
	});
}
