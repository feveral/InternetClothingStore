
function ShowSelector(){
	$("#selector").css("display","block");
}

function HideSelector(){
	$("#selector").css("display","none");
}

$(document).ready(function(){
	$("#mainMenu span").hover(ShowSelector,HideSelector);
    $("#selector").hover(ShowSelector,HideSelector);
});

$(document).ready(function(){
	$("#mainMenu span:nth-child(1)").hover(function(){
			AddSubCategoryToCategory('Basic',1);
			AddSubCategoryToCategory('Top',2);
			AddSubCategoryToCategory('Coat',3);
			AddSubCategoryToCategory('Bottom',4);
			AddSubCategoryToCategory('Accessories',5);
	});
});

function AddSubCategoryToCategory(catagoey,order){
	$.ajax({
		type: "GET",
		url: GetServerUrl() + "/product/subCategory/" + catagoey,
		success: function(msg){
			var object = JSON.parse(msg);
			$('#selector div:nth-child(' + order + ')').empty();
			$('#selector div:nth-child(' + order + ')').append(SubCategoryToHtml(catagoey));
			for (var i = 0; i < object['data'].length ; i++)
	   			$('#selector div:nth-child(' + order + ')').append(SubCategoryToHtml(object['data'][i]));
		},
	   	error: function(xhr, textStatus, error){
	        console.log(xhr.statusText);
	   	}
	});
}

function SubCategoryToHtml(category){
	var html = '<a href="#" onclick="GetProduct(\'{category}\')">{category}</a>';
	html = html.replace('{category}',GetSubCategoryEnglish(category));
	return html.replace('{category}',category);
}

function GetSubCategoryEnglish(subHeader){
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
