$(document).ready(function(){

	
	if(window.location.hash.replace('#','') != '')
	{
		GetProductByCategory(window.location.hash.replace('#',''),RenderCustomerProduct)
	}
	else
	{
		GetNewProduct(RenderCustomerProduct);
	}
	IfManagerGotoManagerPage();
});

$(window).bind('hashchange', function() { 
	GetProductByCategory(window.location.hash.replace('#',''),RenderCustomerProduct);
}); 

function IfManagerGotoManagerPage(){
	GetIsManager(function(msg){
		if( JSON.parse(msg)['success'] )
		{
			location.href = GetServerUrl() + '/manageProduct.html';
		}
	});
}