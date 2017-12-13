$(window).bind('hashchange', function() { 
	GetProduct(window.location.hash.replace('#',''));
}); 

$(document).ready(function(){
	if(window.location.hash.replace('#','') != ''){
		GetProduct(window.location.hash.replace('#',''));
	}
});

