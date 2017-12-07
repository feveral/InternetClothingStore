
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