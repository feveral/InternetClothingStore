$(document).ready(function(){
	IfNotManagerGotoIndex();
	ChangePicture();
	RenderAllColor();
	RenderAllSubCategory();
	PostNewProductDetail();
	WhenCategoryChanged();
});

function ChangePicture(){
	$("#SelectPicture form").submit(function(){
		$("#SelectPicture form").attr('action','/product/upload/?' + 
			"Name=" + $('#Name input').val() + 
			"&Stock=" + $('#Stock input').val() + 
			"&Size=" + $('#Size input').val() + 
			"&Color=" + $('#Color select').val() +
			"&Price=" + $('#Price input').val() +  
			"&Category=" + $('#Category select').val() +
			"&SubCategory=" + $('#SubCategory select').val());
		return true;
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

function WhenCategoryChanged(){
	$("#Category>select").on('change',function(){
		RenderAllSubCategory();
	})
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