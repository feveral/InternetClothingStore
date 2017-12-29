/* Header */



/* Login.html */ 

function ClickChangeToLogin(){
	$('#login').show();
	$('#register').hide();
	$('#loginTitle').css('background-color','black');
	$('#registerTitle').css('background-color','#666666');
}

function ClickChangeToRegister(){
	$('#register').show();
	$('#login').hide();
	$('#loginTitle').css('background-color','#666666');
	$('#registerTitle').css('background-color','black');
}

function ClickRegister(){
	if(IsAllDataNotNull() && IsPassWordEqual())
		Register();
}

function ClickOtherAccountButton(){
	var apiUrl = GetServerUrl() + "/login/logout";
	var callback = function(msg){
		location.href = GetServerUrl() + "/login.html";
	}
	AjaxGet(apiUrl,callback);
}

function ClickMemberButton(){
	var apiUrl = GetServerUrl() + "/login/getUserName";
	var callback = function(msg){
		if((JSON.parse(msg)).success)
			location.href = GetServerUrl() + "/memberCenter";
		else
			location.href = GetServerUrl() + "/login.html";
	}
	AjaxGet(apiUrl,callback);
}

/* index */

function ChangeCustomerSearchText(){
	var keyWord = $('#search > input').val();
	if( keyWord === '' )
	{
		if(window.location.hash.replace('#','') != '')
		{
			GetProductByCategory(window.location.hash.replace('#',''),RenderCustomerProduct)
		}
		else
		{
			GetNewProduct(RenderCustomerProduct);
		}
	}
	else
	{
		GetSearchProductByName($('#search > input').val(),RenderCustomerProduct);
	}
}


/*managerOrderDetail.js*/

function DeleteOrder(){
	$("#OrderList>div>span>img").click(function(){
	var orderId = $(this).parent().prev().prev().prev().prev().prev().prev().text();
	var data = 
	{
		OrderId : orderId,
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		console.log(object);
	}
	DeleteOrderFromManager(data,callback);
	location.href = GetServerUrl() + "/managerOrder.html";
	});
}

/* ManageProduct */

function ClickFunctionSize(self){

	$('#functionSize > div').css('background-color','white');
	$('#functionSize > div').css('color','black');
	$(self).css('background-color','black');
	$(self).css('color','white');
	$('#functionDetail > h3:last-child').text($(self).text());
	var productName = $('#function h2').text();
	var color = $('#functionDetail > h3:first-child').text();
	var size = $('#functionDetail > h3:last-child').text();
	GetProductByAppearence(productName,color,size,RenderFunctionPriceStock);
}

function ClickFunctionColor(self){
	var productName = $('#function h2').text();
	var color = GetColorChinese($(self).children().attr('src'));
	$('#functionColor > div').css('border','0px');
	$(self).css('border','1px black solid');
	$('#functionDetail > h3:first-child').text(color);
	$('#function > div > img').attr('src','./image/' + productName + "_" + color + ".jpg");
}

function ClickManageProduct(self){
	var productName = $(self).children('#productName').text();
	var imagePath =  $(self).children('img').attr('src');
	GetProductColorByName(productName,RenderFunctionColor);
	GetProductSizeByName(productName,RenderFunctionSize);
	$('#function').css('display','block');
	$('#function h2').text(productName);
	$('#function > div > img').attr('src',imagePath);
	$('#functionDetail > h3:first-child').text(imagePath.split('_')[1].split('.jpg')[0]);
}

function ClickFunctionCancle(){
	$('#function').css('display','none');
}

function ClickFunctionSave(){
	var data = 
	{
		Name: $('#function h2').text(),
		Color: $('#functionDetail > h3:first-child').text(),
		Size: $('#functionDetail > h3:last-child').text(),
		Stock: $('#functionStock > input').val(),
		Price: $('#functionPrice > input').val()
	}
	UpdateProductPriceStock(data,function(msg){
		location.href = location.href;
		alert("成功更改產品資訊");
	});
}

function ClickFunctionDelete(){
	var data = 
	{
		Name: $('#function h2').text(),
		Color: $('#functionDetail > h3:first-child').text(),
		Size: $('#functionDetail > h3:last-child').text(),
		Stock: $('#functionStock > input').val(),
		Price: $('#functionPrice > input').val()
	}
	DeleteProductByNameColor(data,function(msg){
		location.href = location.href;
		alert("成功刪除產品");
	});
}

function ChangeManagerSearchText(){
	var keyWord = $('#search > input').val();
	if( keyWord === '' )
	{
		if(window.location.hash.replace('#','') != '')
		{
			GetProductByCategory(window.location.hash.replace('#',''),RenderManagerProduct)
		}
		else
		{
			GetNewProduct(RenderCustomerProduct);
		}
	}
	else
	{
		GetSearchProductByName($('#search > input').val(),RenderManagerProduct);
	}
}

function ClickManagerOnSale(){

}

/* Demonstration */


function ClickAddShoppingCar(boolToShoppingCar){

	if( $('#member > div > a').text() === '登入' )
	{
		alert('請先登入，才能將商品加入購物車');
		boolToShoppingCar = false;
		return;	
	}
	else if( $('#appearenceChoose > div:nth-child(2)').text() === '尚未選擇尺寸' )
	{
		alert('請先選擇商品尺寸');
		boolToShoppingCar = false;
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
	if(boolToShoppingCar)
		location.href = GetServerUrl() + "/shoppingCar.html";
}


/* Favorite */

function ClickAddFavorite(){

	if( $('#member > div > a').text() === '登入' )
	{
		alert('請先登入，才能將商品加入收藏');
		return;
	}
	else if( $('#appearenceChoose > div:nth-child(2)').text() === '尚未選擇尺寸' )
	{
		alert('請先選擇商品尺寸');
		return;
	}

	var apiUrl = GetServerUrl() + '/favorite' ;
	var data =
	{
		Name: $('#productName').text(),
		Color: $('#appearenceChoose > div:nth-child(1)').text(),
		Size: $('#appearenceChoose > div:nth-child(2)').text(),
		Quantity: $('#productQuantity > input').val()
	}

	var callback = function(msg){
		alert('已經將商品加入收藏');
		//InitialShoppingCarHover();
	}
	AjaxPost(apiUrl,data,callback);
}
