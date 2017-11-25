
function Login(){


	$(document).ready(function(){
		$.ajax({
			type: "POST",
			url: "http://0.0.0.0:3000/login",
			data: {username: "mark",password: "1234"},
			success: function(msg)
			{
				console.log(msg);
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
			url: "http://0.0.0.0:3000/getInfo",
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
