
function ClickHeader(catagoey){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: GetServerUrl() + "/GET/subCategory/" + catagoey,
			success: function(msg){
				var object = JSON.parse(msg);
				$("#subHeader").empty();
				for (var i = 0; i < object['data'].length ; i++)
		   		{
		   			$("#subHeader").append(SubHeaderToHtml(object['data'][i]));
		   		}
		   		GetProduct(catagoey);
			},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
}

function SubHeaderToHtml(subHeader){
	var html = '<a href="#" onclick="GetProduct(\'{subHeader}\')">{subHeader}</a>';
	html = html.replace('{subHeader}',GetSubHeaderEnglish(subHeader));
	return html.replace('{subHeader}',subHeader);
}

function GetSubHeaderEnglish(subHeader){
	if(subHeader == '素面大學TEE'){
		return 'PlainTee';
	}
	else if(subHeader == '素面連帽TEE'){
		return 'PlainHatLongTee';
	}
	else if(subHeader == '素面圓領長TEE'){
		return 'PlainRoundNeckTee';
	}
	else if(subHeader == '工作長褲'){
		return 'WorkingPant';
	}
	else if(subHeader == '牛仔短褲'){
		return 'CowBoyShorts';
	}
	else{
		return '';
	}
}