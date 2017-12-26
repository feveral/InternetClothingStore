$(document).ready(function(){

	
	if(window.location.hash.replace('#','') != '')
	{
		GetProduct(window.location.hash.replace('#',''));
	}
	else
	{
		InitialProduct();
	}
	//IfManagerGotoManagerPage();
});

$(window).bind('hashchange', function() { 
	GetProduct(window.location.hash.replace('#',''));
}); 


function InitialProduct(){
	GetNewProduct(function(msg){
		RenderProduct(msg);
	});
}

function IfManagerGotoManagerPage(){
	GetIsManager(function(msg){
		if( JSON.parse(msg)['success'] )
		{
			location.href = GetServerUrl() + '/manageProduct.html';
		}
	});
}