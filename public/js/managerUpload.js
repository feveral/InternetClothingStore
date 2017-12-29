$(document).ready(function(){
	ChangePicture();
	RenderAllColor();
	console.log("cc");
	PostNewProductDetail();
});

function ChangePicture(){
	$("form").submit(function(){
		var picturePath = $('#picture').val();
		picturePath = picturePath.replace("C:\\fakepath\\", "");
		$("#main>div>img").attr("src", "./image/" + picturePath);
		return false;
	});
}

function PostNewProductDetail(){
	console.log("ww");
	$("#submitButton").click(function(){
		console.log($('#picture').val());
		var data = 
		{
			Date:GetDateTime(),
			Name:($("input[name='Name']")).val(),
			Quantity:($("input[name='Quantity']")).val(),
			Size:($("input[name='Size']")).val(),
			Color:($("#Color>select")).val(),
			Price:($("input[name='Price']")).val(),
			Category:($("input[name='Category']")).val(),
			SubCategory:($("input[name='SubCategory']")).val(),
			ImagePath:("./image/" + ($("input[name='Name']")).val() + "_" + ($("#Color>select")).val()) + ".jpg",
		}
		var callback = function(msg){
			var object = JSON.parse(msg);
		}
		console.log(data);
		PostNewProduct(data,callback);
		console.log("ee");
	});
}