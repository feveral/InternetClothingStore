$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: GetServerUrl() + "/login/getUserName",
		success: function(msg)
		{
			var object = JSON.parse(msg);
			if(object.success)
			{
				$('#member a:nth-child(1)').html("Hi ! " + object.data);
			}
	   	},
	   	error: function(xhr, textStatus, error)
	   	{
	        console.log(xhr.statusText);
	   	}
	});
});
