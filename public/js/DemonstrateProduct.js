$(document).ready(function(){

	var attribute = HashToNameAndColor(location.hash);
	$('#main img').attr('src','./image/'+ attribute.Name + "_" + attribute.Color + ".jpg");
	GetProductByName(attribute.Name);

});

function GetProductByName(productName){
	var apiUrl = GetServerUrl() + '/product/name/' + productName;
	var callback = function(msg){
		RenderDemonstrate(JSON.parse(msg)['data']);
	}
	AjaxGet(apiUrl,callback);
}

function RenderDemonstrate(products){
	var colors = FindNotrepeatColorFromProducts(products);
	var sizes = FindNotrepeatSizeFromProducts(products);
	$('#productName').text(products[0].Name);
	$('#productPrice').text("TWD. " + products[0].Price);

	$('#productColor').empty();
	for (var c in colors){
		$('#productColor').append('<img src="' + GetColorUrl(colors[c]) + '">');
	}

	$('#productSize').empty();
	for (var s in sizes){
		$('#productSize').append('<a>' + sizes[s] + '</a>');
	}
}

function FindNotrepeatColorFromProducts(products){
	var colors = [];
	for (var i = 0; i < products.length; i++) {
		if(!(colors.includes(products[i].Color))){
			colors.push(products[i].Color);
		}
	}
	return colors;
}

function FindNotrepeatSizeFromProducts(products){
	var sizes = [];
	for (var i = 0; i < products.length; i++) {
		if(!(sizes.includes(products[i].Size))){
			sizes.push(products[i].Size);
		}
	}
	return sizes;
}

function HashToNameAndColor(href){
	href = href.replace('#','');
	var hrefSplit = href.split('?');
	return { Name:hrefSplit[0] , Color:hrefSplit[1] }; 
}