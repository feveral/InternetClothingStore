function IfNotManagerGotoIndex(){
	GetIsManager(function(msg){
		if( !JSON.parse(msg)['success'] )
		{
			location.href = GetServerUrl();
		}
	});
}

function IfNotMemberGotoMemberPage(){
	GetUserName(function(msg){
		if( JSON.parse(msg)['success'] )
		{
			console.log("success");
		}
		else
		{
			location.href = GetServerUrl() + '/index.html';
			alert("please login!");
		}
	});
}