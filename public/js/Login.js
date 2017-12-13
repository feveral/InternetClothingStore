
function Login(){

	var data = 
	{
		Email: $('input[name=loginEmail]').val(),
		Password: $('input[name=loginPassword]').val()
	};
	var apiUrl = GetServerUrl() + "/login";
	var callback = function(msg){
		location.href = GetServerUrl();
	}
	AjaxPost(apiUrl,data,callback,HandleLoginFail);
}

function HandleLoginFail(xhr, textStatus, error){
	$('#status').css('visibility','visible');
	//$('#status').css('opacity','0');
}

function Logout(){
	var apiUrl = GetServerUrl() + "/login/logout";
	var callback = function(msg){
		location.href = GetServerUrl();
	}
	AjaxGet(apiUrl,callback);
}



function ClickMemberButton(){

	var apiUrl = GetServerUrl() + "/login/getUserName";
	var callback = function(msg){
		var object = JSON.parse(msg);
		if(object.success)
		{
			//location.href = GetServerUrl();
		}
		else
		{
			location.href = GetServerUrl() + "/login.html";
		}
	}
	AjaxGet(apiUrl,callback);
}

function ClickOtherAccountButton(){
	var apiUrl = GetServerUrl() + "/login/logout";
	var callback = function(msg){
		location.href = GetServerUrl() + "/login.html";
	}
	AjaxGet(apiUrl,callback);
}

function ChangeToLogin(){
	$(document).ready(function(){
		$('#login').show();
		$('#register').hide();
		$('#loginTitle').css('background-color','black');
		$('#registerTitle').css('background-color','#666666');
	});
}

function ChangeToRegister(){
	$(document).ready(function(){
		$('#register').show();
		$('#login').hide();
		$('#loginTitle').css('background-color','#666666');
		$('#registerTitle').css('background-color','black');
	});
}


function IsTextNull(data){
	return !!data;
}

function IsAllDataNotNull(){
	var everythingsnotNull = false;
	if(!IsTextNull($('input[name=registerEmail]').val()))
		alert("Email can not be null");
	else if(!IsTextNull($('input[name=registerName]').val()))
		alert("Name can not be null");
	else if(!IsTextNull($('input[name=registerPassword]').val()))
		alert("Password can not be null");
	else if(!IsTextNull($('input[name=registerCellphone]').val()))
		alert("Cellphone can not be null");
	else
		everythingsnotNull = true;
	return everythingsnotNull;
}

function IsPassWordEqual(){
	if($('input[name=registerPassword]').val() != $('input[name=registerComfirmPassword]').val()){
		alert("Password is not equal to confirmPassword");
		return false;
	}
	return true;
}

function Register(){
	var data = 
	{
		Email: ($('input[name=registerEmail]').val()),
		Password: ($('input[name=registerPassword]').val()),
		Cellphone: ($('input[name=registerCellphone]').val()),
		Name: ($('input[name=registerName]').val()),
		Address: $('input[name=registerAddress]').val(),
	};
	var apiUrl = GetServerUrl() + "/member/register";
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object.message);
		if(!object.success){
			alert(object.message);
		}
	}
	AjaxPost(apiUrl,data,callback);
}

function ClickRegister(){
	$(document).ready(function(){
		if(IsAllDataNotNull())
			if(IsPassWordEqual())
				Register();
	});
}
