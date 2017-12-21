function GetOrder(orderId){
	var apiUrl = GetServerUrl() + "/orderInformation.html#" + orderId ;
	location.href = apiUrl;
}
