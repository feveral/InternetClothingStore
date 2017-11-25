
function Login(){


	$(document).ready(function(){
		$.ajax({
			type: "POST",
			url: GetServerUrl() + "/login",
			data: {username: "mark",password: "1234"},
			xhrFields: {
				withCredentials: true
			},
			success: function(msg)
			{
				console.log(msg);
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
