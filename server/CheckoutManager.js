'use strict';

module.exports = class CheckoutManager{

	constructor(){
	}

	CalculateTotal(data){
		var totalPrice = 0;
		var totalClothNumber = 0;
		for(var dataIndex in data){
			totalClothNumber = totalClothNumber + 1;
			if(data[dataIndex]['PercentOff'])
				totalPrice = totalPrice + data[dataIndex]['Price']*(1-data[dataIndex]['PercentOff']/100);
			else
				totalPrice = totalPrice + data[dataIndex]['Price'];
		}
		data[0]['totalPrice'] = totalPrice;
		data[0]['totalClothNumber'] = totalClothNumber;
		return data;
	}

	CalculateProductOnsale(data){
		for(var dataIndex in data){
			if(data[dataIndex]['PercentOff'])
				data[dataIndex]['Price'] = data[dataIndex]['Price']*(1-data[dataIndex]['PercentOff']/100);
		}
		return data;
	}
	
}