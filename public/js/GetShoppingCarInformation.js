
function GetShoppingItem(){
	var apiUrl = GetServerUrl() + "/shoppingCar";
	var callback = function(msg){
		var object = JSON.parse(msg);
		PrintShoppingCarItem(object['data']);
		CalculateTotal(object['data']);
	}
	AjaxGet(apiUrl,callback);
}

function PostShoppingItem(ProductId,Quantity){
	var apiUrl = GetServerUrl() + "/shoppingCar/modify";
	var data =
	{
		ProductId:ProductId,
		Quantity:Quantity
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		CalculateTotal(object['data']);
		InitialShoppingCarHover();
	}
	AjaxPost(apiUrl,data,callback);
}

function PostDeleteShoppingItem(ProductId){
	var apiUrl = GetServerUrl() + "/shoppingCar/delete";
	var data =
	{
		ProductId:ProductId
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		CalculateTotal(object['data']);
		$("#shoppingItem").empty();
		PrintShoppingCarItem(object['data']);
		CalculateTotal(object['data']);
		InitialShoppingCarHover();
	}
	AjaxPost(apiUrl,data,callback);
}

function CalculateTotal(data){
	var totalPrice = 0;
	var totalItemNumber = 0;
	for (var index in data)
	{
		totalPrice += data[index]['Quantity']*data[index]['Price'];
		totalItemNumber += data[index]['Quantity'];
	}
	$("#totalItemNumber").text("小計金額 (共" +totalItemNumber +  "件)");
	$("#totalPrice").text("$" + totalPrice);
}

function PrintShoppingCarItem(data){
	for (var index in data){
		$("#shoppingItem").append(
			"<div>" +
			"<div><img src=" + data[index]['ImagePath'] + "></div>"+
			"<div> " +
			"<span>" + data[index]['Id'] + "</span>" +
			"<span>" + data[index]['Name'] + "</span>" +
			"<span>" + data[index]['Color'] + "</span>" +
			"<span>" + data[index]['Size'] + "</span>" +
			'<span><select id="selectValue">'+ AddOption(data[index]) +"</select></span>" +
			"<span>" + data[index]['Price'] + "</span>" +
			"<span>" + data[index]['Quantity']*data[index]['Price'] + "</span>" +
			"<span><img src='./image/delete.png'></span>" +
			"</div></div>");
	}
	DeleteShoppingItem();
	QuantityChanged();
}

function AddOption(dataIndex){
	var htmlSelector='';
	for (var i = 1; i < 10; i++){
		htmlSelector += "<option value='" + i ;
		if(i == dataIndex['Quantity'])
			htmlSelector += "'selected=\"selected\"";
		htmlSelector += "'>" + i + "</option>";
	}
	return htmlSelector;
}

function QuantityChanged(){
	$("#shoppingItem>div>div>span>select").on('change',function(){
		$(this).parent().next().next().text( this.value * $(this).parent().next().text());
		PostShoppingItem($(this).parent().prev().prev().prev().prev().text(),this.value);
	});
}

function DeleteShoppingItem(){
	$('#shoppingItem>div>div>span:nth-child(8)').click(function(){
		var ProductId = $(this).prev().prev().prev().prev().prev().prev().prev().text();
		PostDeleteShoppingItem(ProductId);
	});
}
