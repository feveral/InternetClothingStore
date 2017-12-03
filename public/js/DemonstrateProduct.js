$(document).ready(function(){

	var attribute = HashToNameAndColor(location.hash);
	GetProductByName(attribute.Name);

});

function GetProductByName(productName){
	$(document).ready(function(){
		$.ajax({
			type: 'GET',
			url: GetServerUrl() + '/product/name/' + productName,
			success:function(msg){
				
				RenderDemonstrate(JSON.parse(msg)['data']);
			},
			error:function(xhr, textStatus, error){
		        console.log(xhr.statusText);
			}
		});
	});
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