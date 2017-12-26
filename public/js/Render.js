

function RenderManagerProduct(msg){
	var data = JSON.parse(msg)['data'];
	$('#main').empty();
	for (var i = 0 ; i < data.length ; i++) 
	{
		var item = $("img[src='" + data[i]['ImagePath'] + "']").parent();	
		if(item.length === 0 )
		{
			$('#main').append(ManagerProductHtml(data[i]));
		}
		else
		{
			item.children('#productSize').append('<a>'+ data[i]['Size'] +'</a>');		
		}
	}
}

function RenderCustomerProduct(msg){
	var data = JSON.parse(msg)['data'];
	$('#main').empty();
	for (var i = 0 ; i < data.length ; i++) 
	{
		var item = $("img[src='" + data[i]['ImagePath'] + "']").parent();	
		if(item.length === 0 )
		{
			$('#main').append(CustomerProductHtml(data[i]));
		}
		else
		{
			item.children('#productSize').append('<a>'+ data[i]['Size'] +'</a>');		
		}
	}
}