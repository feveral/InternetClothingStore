
function Login(){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: GetServerUrl() + "/GET/member/" ,
			success: function(msg){
		        console.log(msg);
		   	},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
}