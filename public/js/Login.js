
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
					location.href = GetServerUrl();
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