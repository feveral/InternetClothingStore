
function RenderShoppingCarHover(msg){
	var object = JSON.parse(msg);
	if(!object['success']) // check is login
	{
		return;
	}
	var data = object['data'];
	$('#shoppingCar > div:nth-child(2)').empty();

	for(var i = 0 ; i < data.length ; i++)
	{
		$('#shoppingCar > div:nth-child(2)').append(ShoppingCarHoverHtml(data[i]));
	}
}

function RenderManagerProduct(msg){
	var data = JSON.parse(msg)['data'];
	$('#main').empty();
	for (var i = 0 ; i < data.length ; i++) 
	{
		var item = $("img[src='" + data[i]['ImagePath'] + "']").parent();	
		if(item.length === 0 )
		{
			$('#main').append(ManagerProductHtml(data[i]));
		}
		else
		{
			item.children('#productSize').append('<a>'+ data[i]['Size'] +'</a>');		
		}
	}
}

function RenderCustomerProduct(msg){
	var data = JSON.parse(msg)['data'];
	$('#main').empty();
	for (var i = 0 ; i < data.length ; i++) 
	{
		var item = $("img[src='" + data[i]['ImagePath'] + "']").parent();	
		if(item.length === 0 )
		{
			$('#main').append(CustomerProductHtml(data[i]));
		}
		else
		{
			item.children('#productSize').append('<a>'+ data[i]['Size'] +'</a>');		
		}
	}
}

function RenderFunctionColor(msg){
	var data = JSON.parse(msg)['data'];
	$('#functionColor').empty();
	for(var i = 0 ; i < data.length ; i++)
	{
		$('#functionColor').append('<div onclick="ClickFunctionColor(this)"><img src="' + GetColorUrl(data[i]['Color']) +'"></div>');
	}
}

function RenderFunctionSize(msg){
	var data = JSON.parse(msg)['data'];
	$('#functionSize').empty();
	for(var i = 0 ; i < data.length ; i++)
	{
		$('#functionSize').append('<div onclick="ClickFunctionSize(this)">' + data[i]['Size'] + '</div>')
	}
	$('#functionSize > div:first-child').css('background-color','black');
	$('#functionSize > div:first-child').css('color','white');
	$('#functionDetail > h3:last-child').text($('#functionSize > div:first-child').text());
	var productName = $('#function h2').text();
	var color = $('#functionDetail > h3:first-child').text();
	var size = $('#functionDetail > h3:last-child').text();
	GetProductByAppearence(productName,color,size,RenderFunctionPriceStock);
}

function RenderFunctionPriceStock(msg){
	var data = JSON.parse(msg)['data'];
	$('#functionPrice input').val(data['Price']);
	$('#functionStock input').val(data['Stock']);
}

/*managerupload.js*/
function RenderAllColor(){
	var callback = function(msg){
		var object = JSON.parse(msg);
		for(var color in object['data']){
			$("#Color>select").append("<option value=" + object['data'][color]['Color'] + ">" +  object['data'][color]['Color'] +  "</option>");
		}
	}
	GetAllProductColor(callback);
}


function GetAllProductColor(callback){
	var apiUrl = GetServerUrl() + "/product/" + "AllColor";
	console.log("ff");
	AjaxGet(apiUrl,callback);
}

function PostNewProduct(data,callback){
	var apiUrl = GetServerUrl() + "/product/" + "InsertNewProduct";
	console.log("cc");
	console.log(data);
	AjaxPost(apiUrl,data,callback);
}	


/*orderInformation*/

function PrintDetail(result){
	$("#orderNumber").text(result[0]['Id']);
	$("#receiver").text(result[0]['Name']);
	$("#data").text(result[0]['Time'].split("T")[0]);
	$("#order>div>select").val(result[0]['State']);
	$("#shipment").text(result[0]['Shipment']);
	$("#price").text(result[0]['TotalPrice']);
	$("#other").text(result[0]['Remarks']);
}

function PrintShoppingItem(result){
	var processedResult = []; 
	for(var r in result){
		var id = result[r]['Name'];
		$("#shoppingData").append(
		"<div> " + 
		"<span>" + result[r]['ProductId'] + "</span>" +
		"<span>" + result[r]['Name'] + "</span>" +
		"<span>" + result[r]['Color'] + "</span>" +
		"<span>" + result[r]['Size'] + "</span>" +
		"<span>" + result[r]['Quantity'] + "</span>" +
		"<span>" + " no " + "</span>" +
		"<span>" + result[r]['Price'] + "</span>" +
		"<span>" + " .. " + "</span>" +
		"</div>");
	}
}