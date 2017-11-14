var product = "";
	
product += '<div id="product" class="col-3 col-m-4">';
product += '<img class="image" src="image/pant00001.jpg"/>';
product += '<p id="productName">棋盤格紋縮口運動長褲</p>';
product += '<div>';
product += '<a href="#">S</a>';
product += '<a href="#">M</a>';
product += '<a href="#">L</a>';
product += '<a href="#">XL</a>';
product += '</div>';
product += '<p id="productSize">NT.980</p>';
product += '</div>';


$(document).ready(function(){
    $("#Add").click(function(){
    	for (var i = 0; i < 20; i++){
    		$("#main").append(product);
    	}
    });
});
