
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

