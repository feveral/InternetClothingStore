
function Login(){

	$(document).ready(function(){
		$.ajax({
			type: "POST",
			url: GetServerUrl() + "/login",
			data: {Email: $('input[name=loginEmail]').val(),Password: $('input[name=loginPassword]').val()},
			xhrFields: {
				withCredentials: true
			},
			success: function(msg)
			{
				location.href = GetServerUrl();
		   	},
		   	error: function(xhr, textStatus, error)
		   	{
		        console.log(error);
		   	}
		});
	});
}

function Logout(){
	$(document).ready(function(){

		$.ajax({
			type: "GET",
			url: GetServerUrl() + "/login/logout",
			data: {},
			xhrFields: {
				withCredentials: true
			},
			success: function(msg)
			{
				location.href = GetServerUrl();
		   	},
		   	error: function(xhr, textStatus, error)
		   	{
		        console.log(error);
		   	}
		});
	});
}

function ClickMemberButton(){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: GetServerUrl() + "/login/getUserName",
			success: function(msg)
			{
				var object = JSON.parse(msg);
				if(object.success)
				{
					//location.href = GetServerUrl();
				}
				else
				{
					location.href = GetServerUrl() + "/login.html";
				}
		   	},
		   	error: function(xhr, textStatus, error)
		   	{
		        console.log(xhr.statusText);
		   	}
		});
	});
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