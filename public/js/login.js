$(document).ready(function(){


});

function ClickChangeToLogin(){
	$('#login').show();
	$('#register').hide();
	$('#loginTitle').css('background-color','black');
	$('#registerTitle').css('background-color','#666666');
}

function ClickChangeToRegister(){
	$('#register').show();
	$('#login').hide();
	$('#loginTitle').css('background-color','#666666');
	$('#registerTitle').css('background-color','black');
}
