function ChangeToLogin(){
	$(document).ready(function(){
		$('#login').show();
		$('#register').hide();
		$('#loginTitle').css('background-color','white');
		$('#registerTitle').css('background-color','#dce0e8');
	});
}

function ChangeToRegister(){
	$(document).ready(function(){
		$('#register').show();
		$('#login').hide();
		$('#loginTitle').css('background-color','#dce0e8');
		$('#registerTitle').css('background-color','white');
	});
}