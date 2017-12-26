
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
		   			'<img class="image" src="' + attribute['ImagePath'] + '">'+ 
		   		'</a>' +
		   		'<div id="productName">' + attribute['Name'] + '</div>' + 
		   		'<div id="productPrice">' + 
		   			'<div>TWD.' + attribute['Price'] + ' </div>' + 
		   			'<div>' + attribute['']+ '</div>' + 
		   		'</div>' + 
		   		'<div id="productSize">' + 
		   			'<a href="#">' + attribute['Size'] + '</a></div>' + 
		   		'</div>' + 
		   	'</div>';
}