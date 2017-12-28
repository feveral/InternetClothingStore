

/* Login.html */ 

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

