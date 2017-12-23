
function InitialShoppingCarHover(){
	$('#member > a').hover(ShowShoppingCarHeader,HideShoppingCarHeader);
	$('#shoppingCar').hover(ShowShoppingCarHeader,HideShoppingCarHeader);
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

function ShowShoppingCarHeader(){
	$('#shoppingCar').css('height','450px');
}

function HideShoppingCarHeader(){
	$('#shoppingCar').css('height','0px');	
}
