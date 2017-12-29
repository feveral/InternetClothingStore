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
			// console.log("success");
		}
		else
		{
			alert("登入以使用更多功能！");
			location.href = GetServerUrl() + '/index.html';
		}
	});
}