
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
}

function ShowShoppingCarHeader(){
	$('#shoppingCar').css('height','450px');
}

function HideShoppingCarHeader(){
	$('#shoppingCar').css('height','0px');	
}
