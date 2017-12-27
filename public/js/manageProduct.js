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


function IfNotManagerGotoIndex(){
	GetIsManager(function(msg){
		if( !JSON.parse(msg)['success'] )
		{
			location.href = GetServerUrl();
		}
	});
}