
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