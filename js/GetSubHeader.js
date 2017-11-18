
$(document).ready(function(){
	$('#bottom').click(function(){
		$.ajax({
			type: "GET",
			url: "http://0.0.0.0:8080/GET/subCategory/Bottom",
			success: function(msg){
		        console.log(msg);

		   		var object = JSON.parse(msg)
		   		for (var i = 0; i < object['data'].length ; i++)
		   		{
		   			$("#subHeader").append('<a>123</a>');
		   		}
		   	},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
});
