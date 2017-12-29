$(document).ready(function(){
	IfNotManagerGotoIndex();
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
			Category:($("#Category>select")).val(),
			SubCategory:($("input[name='SubCategory']")).val(),
			ImagePath:("./image/" + ($("input[name='Name']")).val() + "_" + ($("#Color>select")).val()) + ".jpg",
		}
		var callback = function(msg){
			var object = JSON.parse(msg);
		}
		console.log(data);
		if(IsAllNotNull(data))
			PostNewProduct(data,callback);
	});
}

function IsValueNull(value){
	if(!value)
		return true;
}

function IsAllNotNull(data){
	var bool = true;
	for(dataIndex in data)
	{
		if(IsValueNull(data[dataIndex]))
		{
			alert("有格子未填");
			return false;
		}
	}
	return bool;
}