
function AjaxGet(apiUrl,callback){
	$(document).ready(function(){ 
		$.ajax({
			type: "GET",
			url: apiUrl,
			success: function(msg){
				callback(msg);
			},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
}

function AjaxPost(apiUrl,postData,callback,errorCallback=DefaultErrorCallback){
	$(document).ready(function(){ 
		$.ajax({
			type: "POST",
			url: apiUrl,
			data: postData,
			success: function(msg){
				callback(msg);
			},
		   	error: function(xhr, textStatus, error){
		        errorCallback(xhr, textStatus, error);
		   	}
		});
	});
}

function DefaultErrorCallback(xhr, textStatus, error){
	console.log(xhr.statusText);
}