
function ClickHeader(catagoey){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: GetServerUrl() + "/product/subCategory/" + catagoey,
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
	else if(subHeader == '牛仔褲'){
		return 'CowBoyPant';
	}
	else if(subHeader == '牛仔短褲'){
		return 'CowBoyShorts';
	}
	else if(subHeader == '工作長褲'){
		return 'WorkingPant';
	}
	else if(subHeader == '工作短褲'){
		return 'WorkingShorts';
	}
	else if(subHeader == '棉長褲'){
		return 'CottonPant';
	}
	else if(subHeader == '棉短褲'){
		return 'CottonShorts';
	}
	else if(subHeader == '棒球外套'){
		return 'BaseBallCoat';
	}
	else if(subHeader == '飛行外套'){
		return 'FlightCoat';
	}
	else if(subHeader == '帽子'){
		return 'Hat';
	}
	else if(subHeader == '連帽外套'){
		return 'HoodedCoat';
	}
	else if(subHeader == '飾品'){
		return 'Necklace';
	}
	else if(subHeader == '手機殼'){
		return 'Phonecase';
	}
	else if(subHeader == '襪子'){
		return 'Socks';
	}
	else if(subHeader == '背包'){
		return 'Bag';
	}
	else if(subHeader == '風衣外套'){
		return 'WindCoat';
	}
	else if(subHeader == '長袖上衣'){
		return 'LongSleeveTop';
	}
	else{
		return '';
	}
}