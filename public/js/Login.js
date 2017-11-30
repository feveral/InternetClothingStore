
function Login(){

	$(document).ready(function(){

		$.ajax({
			type: "POST",
			url: GetServerUrl() + "/login",
			data: {username: $('input[name=loginEmail]').val(),password: $('input[name=loginPassword]').val()},
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


function GetInfo(){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: GetServerUrl() + "/login/getInfo",
			success: function(msg)
			{
				console.log(msg);
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
		$('#loginTitle').css('background-color','white');
		$('#registerTitle').css('background-color','#dce0e8');
	});
}

function ChangeToRegister(){
	$(document).ready(function(){
		$('#register').show();
		$('#login').hide();
		$('#loginTitle').css('background-color','#dce0e8');
		$('#registerTitle').css('background-color','white');
	});
}