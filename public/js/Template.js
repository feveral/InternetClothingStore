
function ShoppingCarHoverHtml(attribute){
	if (attribute['PercentOff'] != null)
	{
		attribute['Price'] = attribute['Price'] * (100-attribute['PercentOff']) / 100 ; 
	}
	return '<div>' +
		       '<img src="' + attribute['ImagePath'] + '">' + 
	           '<p>' + attribute['Name'] + "</p>" + 
	           '<p>TWD.' + attribute['Price'] + "</p>" + 
	       '</div>';
}

function ManagerProductHtml(attribute){

	return '<div id="product" class="col">' + 
		   		'<a href="#">' + 
		   			'<img class="image" src="' + attribute['ImagePath'] + '">'+ 
		   		'</a>' +
		   		'<div id="productName">' + attribute['Name'] + '</div>' + 
		   		'<div id="productPrice">' + 
		   			'<div>TWD.' + attribute['Price'] + ' </div>' + 
		   			'<div>'+ OnsalePrice(attribute['Price'],attribute['PercentOff']) +'</div>' + 
		   		'</div>' + 
		   		'<div id="productSize">' + 
		   			'<a href="#">' + attribute['Size'] + '</a></div>' + 
		   		'</div>' + 
		   	'</div>';
}

/* lastCheck.html*/

function AppendStoreLocation(){
	return "<select><option value='中山分店'>中山分店</option><option value='濟南分店'>濟南分店</option></select>";
}

function AppendCreditCardNumber(){
	return  "<p>(請輸入信用卡卡號):</p> "+ 
			"<input type='text' name='creditCardNumber'>";
}

function PrintShopppingCarItemInLastCheck(data){
	for (var index in data){
		$("#detail").append(
			"<div>" + 
			"<span>" + data[index]['Id'] + "</span>" +
			"<span>" + data[index]['Name'] + "</span>" +
			"<span>" + data[index]['Size'] + "</span>" +
			"<span>" + data[index]['Quantity'] + "</span>" +
			"<span>" + data[index]['Price'] + "</span>" +
			"<span>" + data[index]['Quantity']*data[index]['Price'] + "</span>" +
			"</div>");
	}
}

function CustomerProductHtml(attribute){

	return '<div id="product" class="col">' + 
		   		'<a href="demonstration.html#' + attribute['Name'] + '?' + attribute['Color'] + '">' + 
		   			'<img class="image" src="' + attribute['ImagePath'] + '">'+ 
		   		'</a>' +
		   		'<div id="productName">' + attribute['Name'] + '</div>' + 
		   		'<div id="productPrice">' + 
		   			'<div>TWD.' + attribute['Price'] + ' </div>' + 
		   			'<div>'+ OnsalePrice(attribute['Price'],attribute['PercentOff']) +'</div>' + 
		   		'</div>' + 
		   		'<div id="productSize">' + 
		   			'<a href="#">' + attribute['Size'] + '</a></div>' + 
		   		'</div>' + 
		   	'</div>';
}

	function OnsalePrice(price,percentOff){
		if(percentOff != null)
			return 'TWD.' + Math.round(price * (100-percentOff) / 100);
		else
			return '';
	}

/* managerOrder.js*/
function RenderAllOrder(allorder){
	for (var index in allorder){
		$("#OrderList").append(
			"<div>" + 
			"<span>" + allorder[index]['Id'] + "</span>" +
			"<span>" + allorder[index]['Time'].split("T")[0] + "</span>" +
			"<span>" + allorder[index]['State'] + "</span>" +
			"<span>" + allorder[index]['Shipment'] + "</span>" +
			"<span>" + IsRemarksNull(allorder[index]['Remarks']) + "</span>" +
			"<span><a href='#' onclick='GetManagerOrder(" +allorder[index]['Id'] +  ")'>詳細資料</a></span>" + 
			"<span><img src='./image/delete.png'></span>" + 
			"</div>");
	}
	DeleteOrder();
}

function IsRemarksNull(Remarks){
	if(!Remarks)
		return "   ";
	return Remarks;
}

/*orderInformation.js*/
function PrintDetail(result){
	$("#orderNumber").text(result[0]['Id']);
	$("#receiver").text(result[0]['Name']);
	$("#data").text(result[0]['Time'].split("T")[0]);
	$("#state").text(result[0]['State']);
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