
function ClickTopCategoryHeader(){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: "http://0.0.0.0:8080/GET/subCategory/Top",
			success: function(msg){
				var object = JSON.parse(msg);
				$("#subHeader").empty();
				for (var i = 0; i < object['data'].length ; i++)
		   		{
		   			$("#subHeader").append(SubHeaderToHtml(object['data'][i]));
		   		}
			},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
}

function ClickBottomCategoryHeader(){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: "http://0.0.0.0:8080/GET/subCategory/Bottom",
			success: function(msg){
				var object = JSON.parse(msg);
				$("#subHeader").empty();
				for (var i = 0; i < object['data'].length ; i++)
		   		{
		   			$("#subHeader").append(SubHeaderToHtml(object['data'][i]));
		   		}
			},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
}

function ClickCoatCategoryHeader(){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: "http://0.0.0.0:8080/GET/subCategory/Coat",
			success: function(msg){
				var object = JSON.parse(msg);
				$("#subHeader").empty();
				for (var i = 0; i < object['data'].length ; i++)
		   		{
		   			$("#subHeader").append(SubHeaderToHtml(object['data'][i]));
		   		}
			},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
}

function ClickAccessoriesCategoryHeader(){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: "http://0.0.0.0:8080/GET/subCategory/Coat",
			success: function(msg){
				var object = JSON.parse(msg);
				$("#subHeader").empty();
				for (var i = 0; i < object['data'].length ; i++)
		   		{
		   			$("#subHeader").append(SubHeaderToHtml(object['data'][i]));
		   		}
			},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
}


function SubHeaderToHtml(subHeader){
	var html = '<a href="#">{subHeader}</a>';
	return html.replace('{subHeader}',subHeader);
}