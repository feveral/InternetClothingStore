
function GetProduct(categoryOrSubCategory){
	var apiUrl = GetServerUrl() + "/product/" + categoryOrSubCategory;
	var callback = function(msg){
		location.href = GetServerUrl() + "#" + categoryOrSubCategory;
		RenderProduct(msg);
	}
	AjaxGet(apiUrl,callback);
}

function RenderProduct(msg){
	$("#main").empty();
	var object = JSON.parse(msg)
	var productArray = [];
	var productList = [];

	for (var i = 0; i < object['data'].length ; i++)
		isNotRepeat(object['data'][i], productList);
	for (var i = 0; i< productList.length ; i++)
	 	$("#main").append(productToHtml(productList[i]));
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
		var productNotRepeat = {Name : product['Name'], Color : product['Color'], ImagePath : product['ImagePath'], Size : sizeArray, Price : product['Price'],PercentOff : product['PercentOff']};
		productList.push(productNotRepeat);
}

function AddSize(html, product){
	for (var i = 0; i < product['Size'].length ; i++)
		html += '<a href="#">' + product['Size'][i] + '</a>';
	return html;
}

function AddPercentOff(product){
	var onsalePercent = 1-(product['PercentOff']/100)
	var html='';
	if(product['PercentOff'] != null)
		html += '<div>TWD.' + Math.round(product['Price']*onsalePercent) + '</div>';
	else
		html = '';
	return html;
}

function AddFunctionClass(product){
	var onsalePercent = 1-(product['PercentOff']/100)
	var html='';
	if(product['PercentOff'] != null)
		html += 'class = deletePrice';
	else
		html = '';
	return html;
}

function productToHtml(productListItem){


	var html = "";
	html += '<div id="product" class="col-3">';
	html += '<a href="demonstration.html#' + productListItem['Name'] + '?' + productListItem['Color'] + '"><img class="image" src="{ImagePath}"/></a>';
	html += '<div id="productName">{Name}</div>';
	html += '<div id="productPrice"' + AddFunctionClass(productListItem) + '><div>TWD.{Price}</div>' + AddPercentOff(productListItem) + '</div>';
	html += '<div id="productSize">';
	html = AddSize(html, productListItem);
	html += '</div>';
	html += '</div>';
	html = html.replace('{Name}',productListItem['Name']);
	html = html.replace('{ImagePath}',productListItem['ImagePath']);
	html = html.replace('{Price}',productListItem['Price']);

	return html;
}
