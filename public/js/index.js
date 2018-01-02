$(document).ready(function(){

	IfManagerGotoManagerPage();
	if(window.location.hash.replace('#','') != '')
	{
		GetProductByCategory(window.location.hash.replace('#',''),RenderCustomerProduct);
	}
	else
	{
		GetNewProduct(RenderCustomerProduct);
	}
	ChangeOderSelectType();
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

function ChangeOderSelectType(){
	$("#Productselect>select").on('change',function(){
		console.log(GetCategoryChinese(window.location.hash.replace('#','')));
		GetProductBySelectType($(this).val(),GetCategoryChinese(window.location.hash.replace('#','')),RenderCustomerProduct);
	})
}
