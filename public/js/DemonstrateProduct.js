$(document).ready(function(){

	var attribute = HashToNameAndColor(location.hash);
	$('#productName').text(attribute.Name);

});


function HashToNameAndColor(href){
	href = href.replace('#','');
	var hrefSplit = href.split('?');
	return { Name:hrefSplit[0] , Color:hrefSplit[1] }; 
}