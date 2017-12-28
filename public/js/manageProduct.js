$(document).ready(function(){

	IfNotManagerGotoIndex();
	if(window.location.hash.replace('#','') != '')
	{
		GetProductByCategory(window.location.hash.replace('#',''),RenderManagerProduct)
	}
	else
	{
		GetNewProduct(RenderManagerProduct);
	}
});

$(window).bind('hashchange', function() { 
	GetProductByCategory(window.location.hash.replace('#',''),RenderManagerProduct);
}); 

function IfNotManagerGotoIndex(){
	GetIsManager(function(msg){
		if( !JSON.parse(msg)['success'] )
		{
			location.href = GetServerUrl();
		}
	});
}

