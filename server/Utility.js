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

exports.GetDateTime = function() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
}