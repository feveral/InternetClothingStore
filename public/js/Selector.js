
function ShowSelector(){
	 $("#selector").css("height","400px");
	 $("#selector").css("padding-top","30px");
	 $("#selector").css("box-shadow","1px 1px 1px #666666");
}

function HideSelector(){
	 $("#selector").css("height","0px");
	 $("#selector").css("padding-top","0px");
	 $("#selector").css("box-shadow","none");
}

$(document).ready(function(){
	$("#mainMenu span:nth-child(1)").hover(ShowSelector,HideSelector);
    $("#selector").hover(ShowSelector,HideSelector);
    AddSubCategoryToCategory('Basic',1);
	AddSubCategoryToCategory('Top',2);
	AddSubCategoryToCategory('Coat',3);
	AddSubCategoryToCategory('Bottom',4);
	AddSubCategoryToCategory('Accessories',5);
	$("#mainMenu span:nth-child(1)").hover(function(){
			AddSubCategoryToCategory('Basic',1);
			AddSubCategoryToCategory('Top',2);
			AddSubCategoryToCategory('Coat',3);
			AddSubCategoryToCategory('Bottom',4);
			AddSubCategoryToCategory('Accessories',5);
	});
	$('#logo').click(function(){
		location.href = GetServerUrl();
	});

});

function AddSubCategoryToCategory(catagoey,order){
	$.ajax({
		type: "GET",
		url: GetServerUrl() + "/product/subCategory/" + catagoey,
		success: function(msg){
			var object = JSON.parse(msg);
			$('#selector div:nth-child(' + order + ')').empty();
			$('#selector div:nth-child(' + order + ')').append(CategoryToHtml(catagoey));
			for (var i = 0; i < object['data'].length ; i++)
	   			$('#selector div:nth-child(' + order + ')').append(CategoryToHtml(object['data'][i]));
		},
	   	error: function(xhr, textStatus, error){
	        console.log(xhr.statusText);
	   	}
	});
}

function CategoryToHtml(category){
	var hash = "#" + GetCategoryEnglish(category);
	var html = '<a href="'+ hash + '" onclick="GetProduct(\'{category}\')">{category}</a>';
	html = html.replace('{category}',GetCategoryEnglish(category));	
	return html.replace('{category}',category);
}

function GetCategoryEnglish(category){

	if(category == '素面大學TEE'){
		return 'PlainTee';
	}
	else if(category == '素面連帽TEE'){
		return 'PlainHatLongTee';
	}
	else if(category == '素面圓領長TEE'){
		return 'PlainRoundNeckTee';
	}
	else if(category == '短袖上衣'){
		return 'ShortSleeve';
	}
	else if(category == '素面V領短TEE'){
		return 'PlainVNeckTee';
	}
	else if(category == '素面圓領短TEE'){
		return 'PlainRoundNeckTee';
	}
	else if(category == '素面七分袖TEE'){
		return 'PlainMiddleSleeveTee';
	}
	else if(category == '素面背心'){
		return 'PlainVest';
	}
	else if(category == 'Kid'){
		return 'Kid';
	}
	else if(category == '長袖上衣'){
		return 'LongSleeveTop';
	}
	else if(category == '短袖上衣'){
		return 'ShortSleeveTop';
	}
	else if(category == '連帽長TEE'){
		return 'TopHoodedTee';
	}
	else if(category == '襯衫'){
		return 'TopShirt';
	}
	else if(category == '背心'){
		return 'TopVest';
	}
	else if(category == '棒球外套'){
		return 'BaseBallCoat';
	}
	else if(category == '飛行外套'){
		return 'FlightCoat';
	}
	else if(category == '連帽外套'){
		return 'HoodedCoat';
	}
	else if(category == '風衣外套'){
		return 'WindCoat';
	}
	else if(category == '牛仔外套'){
		return 'CowBoyCoat';
	}
	else if(category == '牛仔褲'){
		return 'CowBoyPant';
	}
	else if(category == '牛仔短褲'){
		return 'CowBoyShorts';
	}
	else if(category == '工作長褲'){
		return 'WorkingPant';
	}
	else if(category == '工作短褲'){
		return 'WorkingShorts';
	}
	else if(category == '棉長褲'){
		return 'CottonPant';
	}
	else if(category == '棉短褲'){
		return 'CottonShorts';
	}
	else if(category == '帽子'){
		return 'Hat';
	}
	else if(category == '飾品'){
		return 'Necklace';
	}
	else if(category == '手機殼'){
		return 'Phonecase';
	}
	else if(category == '襪子'){
		return 'Socks';
	}
	else if(category == '背包'){
		return 'Bag';
	}
	else{
		return category;
	}
}
