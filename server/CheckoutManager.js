'use strict';

module.exports = class CheckoutManager{

	constructor(){
	}

	CalculateTotal(data){
		var totalPrice = 0;
		var totalClothNumber = 0;
		for(var dataIndex in data){
			console.log("cc");
			console.log(data[dataIndex]['Price']);
			totalClothNumber = totalClothNumber + 1;
			if(data[dataIndex]['PercentOff'])
				totalPrice = totalPrice + data[dataIndex]['Price']*(1-data[dataIndex]['PercentOff']/100);
			else
				totalPrice = totalPrice + data[dataIndex]['Price'];
		}
		console.log(totalPrice);
		console.log(totalClothNumber);
		data[0]['totalPrice'] = totalPrice;
		data[0]['totalClothNumber'] = totalClothNumber;
		console.log("zz" + data['Price']);
		console.log("zzcc" + data['totalClothNumber']);
		return data;
	}
	
}