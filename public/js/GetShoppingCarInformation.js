$(document).ready(function(){
	var apiUrl = GetServerUrl() + "/shoppingCar";
	var callback = function(msg){
		var object = JSON.parse(msg);
		PrintShoppingCarItem(object['data']);
		QuantityChanged();
		GoBackToShopping();
	}
	AjaxGet(apiUrl,callback);
});

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
			"</div></div>");
	}
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
	});
}

function GoBackToShopping(){
	$('#goBackToBuy').click(function(){
		location.href = GetServerUrl();
	});
}


