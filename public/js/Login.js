
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
	AjaxPost(apiUrl,data,callback,function(xhr, textStatus, error){
		$('#status').css('visibility','visible');
	});
}

function Logout(){
	var apiUrl = GetServerUrl() + "/login/logout";
	var callback = function(msg){
		location.href = GetServerUrl();
	}
	AjaxGet(apiUrl,callback);
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
		if(object.result)
			alert("register success!");
		else
			alert("this email has been registered");
	}
	AjaxPost(apiUrl,data,callback);
}

function IsAllDataNotNull(){
	if( ! $('input[name=registerEmail]').val() )
		alert("Email can not be null");
	else if( ! $('input[name=registerName]').val() ) 
		alert("Name can not be null");
	else if( ! $('input[name=registerPassword]').val() )
		alert("Password can not be null");
	else if( ! $('input[name=registerCellphone]').val() )
		alert("Cellphone can not be null");
	else
		return true;
}

function IsPassWordEqual(){
	if( $('input[name=registerPassword]').val() != $('input[name=registerComfirmPassword]').val() )
		alert("Password is not equal to confirmPassword");
	else
		return true;
}

