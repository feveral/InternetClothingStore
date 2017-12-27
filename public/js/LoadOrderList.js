$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: GetServerUrl() + "/order/LoadOrderList",
		success: function(msg)
		{
			var object = JSON.parse(msg);
			if(object.success)
			{
				PrintOrder(object.result);
			}
	   	},
	   	error: function(xhr, textStatus, error)
	   	{
	        console.log(xhr.statusText);
	   	}
	});
});

function PrintOrder(result){
	var processedResult = []; 
	for(var r in result){
		var id = result[r]['Id'];
		$("#order").append(
		"<div> " + 
		"<span>" + result[r]['Id'] + "</span>" +
		"<span>" + ExtractTimeString(result[r]['Time']) + "</span>" +
		"<span>" + result[r]['State'] + "</span>" +
		"<span>" + result[r]['Shipment'] + "</span>" +
		"<span>" + " " + "</span>" +
		"<div><a href='#'" + "onclick=GetOrder("+ result[r]['Id'] +")>詳細資料</a>"+ 
		"</div>");
	}
}

function ExtractTimeString(TimeString){
	return TimeString.split("T")[0];
}