
function GetProduct(categoryOrSubCategory){
	$(document).ready(function(){
		$.ajax({
			type: "GET",
			url: GetServerUrl() + "/GET/product/" + categoryOrSubCategory,
			success: function(msg){
				$("#main").empty();
		   		var object = JSON.parse(msg)
		   		var productArray = [];
		   		var productList = [];
		   		for (var i = 0; i < object['data'].length ; i++)
		   			isNotRepeat(object['data'][i], productList);
		   		for (var i = 0; i< productList.length ; i++)
		   		 	$("#main").append(productToHtml(productList[i]));
		   	},
		   	error: function(xhr, textStatus, error){
		        console.log(xhr.statusText);
		   	}
		});
	});
}

function isNotRepeat(product, productList){
	var theSame = 0;
	if(productList.length == 0)	
	{
		AddNewProduct(product, productList);
	}
	else
	{
		for(var i = 0; i <= productList.length - 1; i++)
		{
			if(productList[i]['Name'] + productList[i]['Color'] == product['Name'] + product['Color'])
			{
				theSame = 1;
				productList[i]['Size'].push(product['Size']); 	
			}
		}
		if(theSame != 1)
		{
			AddNewProduct(product, productList);
		}
		theSame = 0;
	}
}

function AddNewProduct(product, productList){
		var sizeArray  = [product['Size']];
		var productNotRepeat = {Name : product['Name'], Color : product['Color'], ImagePath : product['ImagePath'], Size : sizeArray, Price : product['Price']};
		productList.push(productNotRepeat);
}

function AddSize(html, product){
	for (var i = 0; i < product['Size'].length ; i++)
		html += '<a href="#">' + product['Size'][i] + '</a>';
	return html;
}

function productToHtml(product){
	var html = "";
	html += '<div id="product" class="col-3 col-m-4">';
	html += '<img class="image" src="{ImagePath}"/>';
	html += '<p id="productName">{Name}</p>';
	html += '<div>';

	html = AddSize(html, product);
	html += '</div>';
	html += '<p id="productSize">NT.{Price}</p>';
	html += '</div>';

	html = html.replace('{Name}',product['Name']);
	html = html.replace('{ImagePath}',product['ImagePath']);
	html = html.replace('{Price}',product['Price']);
	return html;
}
