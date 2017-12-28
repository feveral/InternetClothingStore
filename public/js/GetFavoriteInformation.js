
function GetFavoriteItem(){
	var apiUrl = GetServerUrl() + "/favorite";
	var callback = function(msg){
		var object = JSON.parse(msg);
		PrintFavoriteItem(object['data']);
	}
	AjaxGet(apiUrl,callback);
}

function PostFavoriteItem(ProductId,Quantity){
	var apiUrl = GetServerUrl() + "/favorite/modify";
	var data =
	{
		ProductId:ProductId,
		Quantity:Quantity
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
	}
	AjaxPost(apiUrl,data,callback);
}

function PostDeleteFavoriteItem(ProductId){
	var apiUrl = GetServerUrl() + "/favorite/delete";
	var data =
	{
		ProductId:ProductId
	};
	var callback = function(msg){
		var object = JSON.parse(msg);
		$("#favoriteItem").empty();
		PrintFavoriteItem(object['data']);
	}
	AjaxPost(apiUrl,data,callback);
}

function PrintFavoriteItem(data){
	for (var index in data){
		$("#favoriteItem").append(
			"<div>" +
			"<div><img src=" + data[index]['ImagePath'] + "></div>"+
			"<div> " +
			"<span>" + data[index]['Id'] + "</span>" +
			"<span>" + data[index]['Name'] + "</span>" +
			"<span>" + data[index]['Color'] + "</span>" +
			"<span>" + data[index]['Size'] + "</span>" +
			"<span>" + data[index]['Price'] + "</span>" +
			"<span><img src='./image/delete.png'></span>" +
			"</div></div>");
	}
	DeleteFavoriteItem();
}

function AddOption(dataIndex){
	var htmlSelector='';
	for (var i = 1; i < 10; i++){
		htmlSelector += "<option value='" + i ;
		if(i == dataIndex['Quantity'])
			htmlSelector += "'selected=\"selected\"";
		htmlSelector += "'>" + i + "</option>";
	}
	return htmlSelector;
}

function DeleteFavoriteItem(){
	$('#favoriteItem>div>div>span:nth-child(6)').click(function(){
		var ProductId = $(this).prev().prev().prev().prev().prev().prev().prev().text();
		PostDeleteFavoriteItem(ProductId);
	});
}
