
/* Header */ 

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

/* manageProduct.html */ 

function ManagerProductHtml(attribute){
	var deleteClass = '';
	var onsalePrice = OnsalePrice(attribute['Price'],attribute['PercentOff']);
	if(onsalePrice  != '')
		deleteClass = 'class=deletePrice';
	return '<div id="product" onclick="ClickManageProduct(this)">' + 
		   		'<img class="image" src="' + attribute['ImagePath'] + '">'+ 
		   		'<div id="productName">' + attribute['Name'] + '</div>' + 
		   		'<div id="productPrice"' + deleteClass  + '>' + 
		   			'<div>TWD.' + attribute['Price'] + ' </div>' + 
		   			'<div>'+ onsalePrice +'</div>' + 
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

/* index.html */ 

function CustomerProductHtml(attribute){
	var deleteClass = '';
	var onsalePrice = OnsalePrice(attribute['Price'],attribute['PercentOff']);
	if(onsalePrice  != '')
		deleteClass = 'class=deletePrice';
	return '<div id="product" class="col">' + 
		   		'<a href="demonstration.html#' + attribute['Name'] + '?' + attribute['Color'] + '">' + 
		   			'<img class="image" src="' + attribute['ImagePath'] + '">'+ 
		   		'</a>' +
		   		'<div id="productName">' + attribute['Name'] + '</div>' + 
		   		'<div id="productPrice"' + deleteClass  + '>' + 
		   			'<div>TWD.' + attribute['Price'] + ' </div>' + 
		   			'<div>'+ onsalePrice +'</div>' + 
		   		'</div>' + 
		   		'<div id="productSize">' + 
		   			'<a href="#">' + attribute['Size'] + '</a></div>' + 
		   		'</div>' + 
		   	'</div>';
}

/* managerHeader */

function ManagerSubCategoryHtml(subCategory){
	var hash = GetServerUrl() + "/manageProduct.html" + "#" + GetCategoryEnglish(subCategory);
	var html = '<a href="'+ hash + '" onclick="GetProductByCategory(\'{subCategory}\',RenderManagerProduct)">{subCategory}</a>';
	html = html.replace('{subCategory}',GetCategoryEnglish(subCategory));	
	return html.replace('{subCategory}',subCategory);
}

/* lastCheck.html*/

function AppendStoreLocation(){
	return "<select><option value='中山分店'>中山分店</option><option value='濟南分店'>濟南分店</option></select>";
}

function AppendCreditCardNumber(){
	return  "<p>(請輸入信用卡卡號):</p> "+ 
			"<input type='text' name='creditCardNumber'>";
}

function RenderShopppingCarItemInLastCheck(data){
	for (var index in data){
		var style = "";
		if(data[index]['PercentOff'] != null)
		{
			data[index]['Price'] = Math.round(data[index]['Price'] * (100-data[index]['PercentOff'])/100) ; 
			style = 'class=redColor';
		}
		$("#detail").append(
			"<div>" + 
			"<span>" + data[index]['Id'] + "</span>" +
			"<span>" + data[index]['Name'] + "</span>" +
			"<span>" + data[index]['Size'] + "</span>" +
			"<span>" + data[index]['Quantity'] + "</span>" +
			"<span " + style + ">" + data[index]['Price'] + "</span>" +
			"<span " + style + ">" + data[index]['Quantity']*data[index]['Price'] + "</span>" +
			"</div>");
	}
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
	$("#order>div>select").val(result[0]['State']);
	$("#shipment").text(result[0]['Shipment']);
	$("#price").text(result[0]['TotalPrice']);
	$("#other").text(result[0]['Remarks']);
}

function PrintShoppingItem(result){
	console.log(result);
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
		"<span>" + DoPercentOffString(result[r]['PercentOff']) + "</span>" +
		"<span>" + result[r]['Price'] + "</span>" +
		"<span>" + " .. " + "</span>" +
		"</div>");
	}
}

function DoPercentOffString(percentOff){
	if(!percentOff)
		return "no";
	else 
		return percentOff+"%";
}

