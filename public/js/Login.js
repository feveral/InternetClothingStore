
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
	AjaxPost(apiUrl,data,callback);
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


function Register(){
	console.log("fsahfjs");
	$(document).ready(function(){
		$.ajax({
			type: "POST",
			url: GetServerUrl() + "/register",
			data: {
					Email: $('input[name=registerEmail]').val(),
					Password: $('input[name=registerPassword]').val(),
					Cellphone: $('input[name=registerCellphone]').val(),
					Name:"123",
					Address:"789"
				  },
			xhrFields: {
				withCredentials: true
			},
			success: function(msg)
			{
				//location.href = GetServerUrl();
				console.log("duck");
		   	},
		   	error: function(xhr, textStatus, error)
		   	{

		        console.log(error);
		   	}
		});
	});
}

function ClickRegister(){
	$(document).ready(function(){
		Register();
	});
}