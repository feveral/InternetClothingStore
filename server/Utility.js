

exports.ProduceRandomDate = function(){
	var year = 2017;
	var month = Math.floor(Math.random() * 12) + 1;
	var day = Math.floor(Math.random() * 28) + 1;  
	return (year.toString() + "-" + month.toString() + "-" + day.toString());
}



