$(document).ready(function(){

	var attribute = HashToNameAndColor(location.hash);
	$('#main img').attr('src','./image/'+ attribute.Name + "_" + attribute.Color + ".jpg");
	GetProductByName(attribute.Name);
});

function GetProductByName(productName){
	var apiUrl = GetServerUrl() + '/product/name/' + productName;
	var callback = function(msg){
		RenderDemonstrate(JSON.parse(msg)['data']);
		SetColorClick();
		SetSizeClick();
		SetQuantityClick();
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
	return { Name:hrefSplit[0] , Color:hrefSplit[1] }; 
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

function AddShoppingCarClick(){

	if( !IsLogin() )
	{
		alert('請先登入，才能將商品加入購物車');
		return;	
	}
	else if( !IsSizeChoose() )
	{
		alert('請先選擇商品尺寸');
		return;
	}

	var apiUrl = GetServerUrl() + '/shoppingCar' ;
	var data = 

	{
		Name: $('#productName').text(),
		Color: $('#appearenceChoose > div:nth-child(1)').text(),
		Size: $('#appearenceChoose > div:nth-child(2)').text(),
		Quantity: $('#productQuantity > input').val()
	}

	var callback = function(msg){
		alert('已經將商品加入購物車');
		InitialShoppingCarHover();
	} 	
	AjaxPost(apiUrl,data,callback);
}

function IsSizeChoose(){
	if( $('#appearenceChoose > div:nth-child(2)').text() === '尚未選擇尺寸')
		return false;
	else
		return true;
}

function IsLogin(){
	if( $('#member > div > a').text() === '登入' )
		return false;
	else
		return true;
}
