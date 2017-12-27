
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


