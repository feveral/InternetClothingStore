

function AddSubCategoryToCategory(catagory,order){

	var apiUrl = GetServerUrl() + "/product/subCategory/" + catagory;
	var callback = function(msg){
		var object = JSON.parse(msg);
		$('#selector div:nth-child(' + order + ')').empty();
		$('#selector div:nth-child(' + order + ')').append(CategoryToHtml(catagory));
		for (var i = 0; i < object['data'].length ; i++)
   			$('#selector div:nth-child(' + order + ')').append(CategoryToHtml(object['data'][i]));
	}
	AjaxGet(apiUrl,callback);
}

function AddSubCategoryToCategoryManager(catagory,order){

	var apiUrl = GetServerUrl() + "/product/subCategory/" + catagory;
	var callback = function(msg){
		var object = JSON.parse(msg);
		$('#selector div:nth-child(' + order + ')').empty();
		$('#selector div:nth-child(' + order + ')').append(ManagerSubCategoryHtml(catagory));
		for (var i = 0; i < object['data'].length ; i++)
   			$('#selector div:nth-child(' + order + ')').append(ManagerSubCategoryHtml(object['data'][i]));
	}
	AjaxGet(apiUrl,callback);
}


function CategoryToHtml(category){
	var hash = GetServerUrl() + "#" + GetCategoryEnglish(category);
	var html = '<a href="'+ hash + '" onclick="GetProductByCategory(\'{category}\',RenderCustomerProduct)">{category}</a>';
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

function GetCategoryChinese(category){

	if(category == 'PlainTee'){
		return '素面大學TEE';
	}
	else if(category == 'PlainHatLongTee'){
		return '素面連帽TEE';
	}
	else if(category == 'PlainRoundNeckTee'){
		return '素面圓領長TEE';
	}
	else if(category == 'ShortSleeve'){
		return '短袖上衣';
	}
	else if(category == 'PlainVNeckTee'){
		return '素面V領短TEE';
	}
	else if(category == 'PlainRoundNeckTee'){
		return '素面圓領短TEE';
	}
	else if(category == 'PlainMiddleSleeveTee'){
		return '素面七分袖TEE';
	}
	else if(category == 'PlainVest'){
		return '素面背心';
	}
	else if(category == 'Kid'){
		return 'Kid';
	}
	else if(category == 'LongSleeveTop'){
		return '長袖上衣';
	}
	else if(category == 'ShortSleeveTop'){
		return '短袖上衣';
	}
	else if(category == 'TopHoodedTee'){
		return '連帽長TEE';
	}
	else if(category == 'TopShirt'){
		return '襯衫';
	}
	else if(category == 'TopVest'){
		return '背心';
	}
	else if(category == 'BaseBallCoat'){
		return '棒球外套';
	}
	else if(category == 'FlightCoat'){
		return '飛行外套';
	}
	else if(category == 'HoodedCoat'){
		return '連帽外套';
	}
	else if(category == 'WindCoat'){
		return '風衣外套';
	}
	else if(category == 'CowBoyCoat'){
		return '牛仔外套';
	}
	else if(category == 'CowBoyPant'){
		return '牛仔褲';
	}
	else if(category == 'CowBoyShorts'){
		return '牛仔短褲';
	}
	else if(category == 'WorkingPant'){
		return '工作長褲';
	}
	else if(category == 'WorkingShorts'){
		return '工作長褲';
	}
	else if(category == 'CottonPant'){
		return '棉長褲';
	}
	else if(category == 'CottonShorts'){
		return '棉短褲';
	}
	else if(category == 'Hat'){
		return '帽子';
	}
	else if(category == 'Necklace'){
		return '飾品';
	}
	else if(category == 'Phonecase'){
		return '手機殼';
	}
	else if(category == 'Socks'){
		return '襪子';
	}
	else if(category == 'Bag'){
		return '背包';
	}
	else{
		return category;
	}
}