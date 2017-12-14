
$(document).ready(function(){
	$('#member > a').hover(ShowShoppingCarHeader,HideShoppingCarHeader);
	$('#shoppingCar').hover(ShowShoppingCarHeader,HideShoppingCarHeader);
});

function ShowShoppingCarHeader(){
	$('#shoppingCar').css('height','450px');
}

function HideShoppingCarHeader(){
	$('#shoppingCar').css('height','0px');	
}