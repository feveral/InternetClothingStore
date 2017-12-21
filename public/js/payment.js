$(document).ready(function(){


	GetShoppingCar(RenderDetail);
});


function RenderDetail(msg){
	var object = JSON.parse(msg);
	if(!object['success']) // check is login
	{
		return;
	}
	var data = object['data'];
}