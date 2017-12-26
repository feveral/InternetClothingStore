
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

	return '<div id="product">' + 
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