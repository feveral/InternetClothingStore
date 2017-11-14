
$(document).ready(function(){

	$.ajax({
		type: "GET",
		url: "http://0.0.0.0:8080/pant",
		data: "send",
		dataType: 'text',
		success: function(msg){

	   		var object = JSON.parse(msg)
	   		for (var i = 0; i < object['data'].length ; i++)
	   		{
	   			$("#main").append(productToHtml(object['data'][i]));
	   		}
	   	},
	   	error: function(xhr, textStatus, error){
	        console.log(xhr.statusText);
	   	}
	});
});


function productToHtml(product){
	var html = "";
	html += '<div id="product" class="col-3 col-m-4">';
	html += '<img class="image" src="{ImagePath}"/>';
	html += '<p id="productName">{Name}</p>';
	html += '<div>';
	html += '<a href="#">S</a>';
	html += '<a href="#">M</a>';
	html += '<a href="#">L</a>';
	html += '<a href="#">XL</a>';
	html += '</div>';
	html += '<p id="productSize">NT.{Price}</p>';
	html += '</div>';

	html = html.replace('{Name}',product['Name']);
	html = html.replace('{ImagePath}',product['ImagePath']);
	html = html.replace('{Price}',product['Price']);

	return html;
}

function productBasicHtml(){

} 