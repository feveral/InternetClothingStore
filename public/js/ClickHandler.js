

/* Login.html */ 

function ClickRegister(){
	if(IsAllDataNotNull() && IsPassWordEqual())
		Register();
}

function ClickOtherAccountButton(){
	var apiUrl = GetServerUrl() + "/login/logout";
	var callback = function(msg){
		location.href = GetServerUrl() + "/login.html";
	}
	AjaxGet(apiUrl,callback);
}

function ClickMemberButton(){
	var apiUrl = GetServerUrl() + "/login/getUserName";
	var callback = function(msg){
		if((JSON.parse(msg)).success)
			location.href = GetServerUrl() + "/memberCenter";
		else
			location.href = GetServerUrl() + "/login.html";
	}
	AjaxGet(apiUrl,callback);
}

/*  */