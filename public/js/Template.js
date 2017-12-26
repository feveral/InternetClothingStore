
function ShoppingCarHoverHtml(attricute){
	if (attricute['PercentOff'] != null)
	{
		attricute['Price'] = attricute['Price'] * (100-attricute['PercentOff']) / 100 ; 
	}
	return '<div>' +
		       '<img src="' + attricute['ImagePath'] + '">' + 
	           '<p>' + attricute['Name'] + "</p>" + 
	           '<p>TWD.' + attricute['Price'] + "</p>" + 
	       '</div>';
}

function ManagerProductHtml(attribute){
	return '<div id="product" class="col">' + 
		   		'<a href="#">' + 
		   			'<img class="image" src="./image/街頭潑漆長褲_黑色.jpg">'+ 
		   		'</a>' +
		   		'<div id="productName">街頭潑漆長褲</div>' + 
		   		'<div id="productPrice"' + 
		   			'<div>TWD.980</div>' + 
		   		'</div>'
		   		'<div id="productSize">' + 
		   			'<a href="#">34</div>' + 
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