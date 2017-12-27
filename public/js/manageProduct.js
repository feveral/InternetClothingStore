$(document).ready(function(){

	if(window.location.hash.replace('#','') != '')
	{
		GetProductByCategory(window.location.hash.replace('#',''),RenderManagerProduct)
	}
	else
	{
		GetNewProduct(RenderManagerProduct);
	}
});