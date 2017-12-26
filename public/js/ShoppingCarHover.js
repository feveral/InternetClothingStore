
function InitialShoppingCarHover(){
	$('#member > a').hover(ShowShoppingCarHover,HideShoppingCarHover);
	$('#shoppingCar').hover(ShowShoppingCarHover,HideShoppingCarHover);
	GetShoppingCar(RenderShoppingCarHover);
}

function RenderShoppingCarHover(msg){
	var object = JSON.parse(msg);
	if(!object['success']) // check is login
	{
		return;
	}
	var data = object['data'];
	$('#shoppingCar > div:nth-child(2)').empty();

	for(var i = 0 ; i < data.length ; i++)
	{
		$('#shoppingCar > div:nth-child(2)').append(ShoppingCarHoverHtml(data[i]));
	}
}

function ShowShoppingCarHover(){
	$('#shoppingCar').css('height','450px');
}

function HideShoppingCarHover(){
	$('#shoppingCar').css('height','0px');	
}
