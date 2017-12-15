
$(document).ready(function(){
	InitialShoppingCarHover();
});


function InitialShoppingCarHover(){

	$('#member > a').hover(ShowShoppingCarHeader,HideShoppingCarHeader);
	$('#shoppingCar').hover(ShowShoppingCarHeader,HideShoppingCarHeader);

	var apiUrl = GetServerUrl() + '/shoppingCar';
	var callback = RenderShoppingCarHover;
	AjaxGet(apiUrl,callback);
}

function RenderShoppingCarHover(msg){
	var object = JSON.parse(msg);
	var data = object['data'];
	$('#shoppingCar > div:nth-child(2)').empty();


	for(var i = 0 ; i < data.length ; i++)
	{
		console.log(data[i]);
		$('#shoppingCar > div:nth-child(2)').append(DataToShoppingCarHoverHtml(data[i]));
	}
}

function DataToShoppingCarHoverHtml(data){
	if (data['PercentOff'] != null)
	{
		data['Price'] = data['Price'] * (100-data['PercentOff']) / 100 ; 
	}
	return '<div>' +
		       '<img src="' + data['ImagePath'] + '">' + 
	           '<p>' + data['Name'] + "</p>" + 
	           '<p>TWD.' + data['Price'] + "</p>" + 
	       '</div>';
}


function ShowShoppingCarHeader(){
	$('#shoppingCar').css('height','450px');
}

function HideShoppingCarHeader(){
	$('#shoppingCar').css('height','0px');	
}
