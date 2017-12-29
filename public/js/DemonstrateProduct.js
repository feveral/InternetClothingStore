function InitialDemonstrationProduct(){
	var attribute = HashToNameAndColor(location.hash);
	$('#main img').attr('src','./image/'+ attribute.Name + "_" + attribute.Color + ".jpg");
	GetProductByName(attribute.Name,function(msg){
		RenderDemonstrate(msg);
		SetColorClick();
		SetSizeClick();
		SetQuantityClick();
	});
}

function RenderDemonstrate(msg){
	var attribute = HashToNameAndColor(location.hash);
	var products = JSON.parse(msg)['data'];
	var colors = FindNotrepeatColorFromProducts(products);
	var sizes = FindNotrepeatSizeFromProducts(products);
	console.log(products);
	$('#productName').text(attribute.Name);
	GetProductPriceByNameColor(attribute.Name,attribute.Color,function(msg){
		ChangeDemonstrattePrice(JSON.parse(msg)['data'][0]['Price'],JSON.parse(msg)['data'][0]['PercentOff']);
	});
	if( products[0]['OnsaleName'] != null )
		$('#onSale').text(products[0]['OnsaleName']);
	else
		$('#onSale').text("");
	$('#productColor').empty();
	for (var c in colors){
		$('#productColor').append('<div><img src="' + GetColorUrl(colors[c]) + '"></div>');
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
	return { Name:decodeURI(hrefSplit[0]) , Color:decodeURI(hrefSplit[1]) };
}

function ChangeDemonstrattePrice(price,percentOff){
	$('#productPrice').empty();
	$('#productPrice').append("<span>TWD. " + price + '</span>');
	if( percentOff != null)
	{
		$('#productPrice').append("<span>TWD. " + Math.round(price*(100-percentOff)/100) + '</span>');
		$('#productPrice span:first-child').addClass("deletePrice");
	}
	else
	{
		$('#productPrice').append("<span></span>");
	}
}


function SetColorClick(){
	var attribute = HashToNameAndColor(location.hash);
	$('#appearenceChoose > div:nth-child(1)').text(attribute.Color);
	$('#productColor > div > img[src="' + GetColorUrl(attribute.Color) +'"]').parent().css('border','1px solid black')
	$('#productColor > div > img').click(function(){
		var orininImagePath = $(this).attr('src');
		$('#productColor > div').css('border','0');
		$(this).parent().css('border','1px solid black');
		$('#main > img').attr('src','./image/'+ attribute.Name + "_" + GetColorChinese(orininImagePath) + ".jpg");
		$('#appearenceChoose > div:nth-child(1)').text(GetColorChinese(orininImagePath));
		GetProductPriceByNameColor($('#productName').text(),$('#appearenceChoose > div:nth-child(1)').text(),function(msg){
			ChangeDemonstrattePrice(JSON.parse(msg)['data'][0]['Price'],JSON.parse(msg)['data'][0]['PercentOff']);
		});
	});
}

function SetSizeClick(){
	$('#productSize > a').click(function(){
		$('#productSize > a').css('background-color','white');
		$('#productSize > a').css('color','black');
		$(this).css('background-color','black');
		$(this).css('color','white');
		$('#appearenceChoose > div:nth-child(2)').text($(this).text());
	});
}

function SetQuantityClick(){
	$('#productQuantity > a:nth-child(1)').click(function(){

		if($('#productQuantity > input').val() > 0 )
		{
			$('#productQuantity > input').val($('#productQuantity > input').val() - 1)
		}
		else if(!Number.isInteger($('#productQuantity > input').val()))
		{
			$('#productQuantity > input').val(0);
		}
	});

	$('#productQuantity > a:nth-child(3)').click(function(){
		$('#productQuantity > input').val(parseInt($('#productQuantity > input').val()) + 1)
	});
}


