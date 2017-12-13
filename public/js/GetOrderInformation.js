function GetOrder(orderId){
	console.log("cc"+orderId);
	console.log(GetServerUrl());
	var apiUrl = GetServerUrl() + "/orderInformation.html#" + orderId ;
	location.href = apiUrl;
}

