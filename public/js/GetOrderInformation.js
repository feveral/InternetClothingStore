function GetOrder(orderId){
	var apiUrl = GetServerUrl() + "/orderInformation.html#" + orderId ;
	location.href = apiUrl;
}

function GetManagerOrder(orderId){
	var apiUrl = GetServerUrl() + "/managerOrderDetail.html#" + orderId ;
	location.href = apiUrl;
}
