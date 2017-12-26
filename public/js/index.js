$(document).ready(function(){

	
	if(window.location.hash.replace('#','') != '')
	{
		GetProductByCategory(window.location.hash.replace('#',''),RenderCustomerProduct)
	}
	else
	{
		InitialProduct();
	}
	IfManagerGotoManagerPage();
});

$(window).bind('hashchange', function() { 
	GetProductByCategory(window.location.hash.replace('#',''),RenderCustomerProduct);
}); 


function InitialProduct(){
	GetNewProduct(RenderCustomerProduct);
}

function IfManagerGotoManagerPage(){
	GetIsManager(function(msg){
		if( JSON.parse(msg)['success'] )
		{
			location.href = GetServerUrl() + '/manageProduct.html';
		}
	});
}