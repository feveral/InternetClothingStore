'use strict';

exports.ProduceRandomDate = function(){
	var year = 2017;
	var month = Math.floor(Math.random() * 12) + 1;
	var day = Math.floor(Math.random() * 28) + 1;  
	return (year.toString() + "-" + month.toString() + "-" + day.toString());
}

exports.ProduceRandomNumber = function(maxNumber,quantity){
	var list = [];
	for (var i = 0; i < quantity; i++) 
	{
		while(true)
		{
			var randomNumber = Math.floor(Math.random() * maxNumber) + 1;
			if( list.indexOf(randomNumber) != -1 )
			{
				continue;
			}
			else
			{
				list.push(randomNumber);
				break;
			}
		}
	}
	return list;
}