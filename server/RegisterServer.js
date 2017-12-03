'use strict';

const MemberManager = require('./MemberManager.js');

module.exports = class{

	constructor(router){
		this.router = router;
		this.memberManager = new MemberManager();
		this.SetAPI();
	}

	SetAPI(){
		var self = this;

		self.router.post('/',function(req,res){
			res.send(JSON.stringify({success:false}));
			// self.memberManager.AddCustomer(,function(err,result){
			// 	res.send(JSON.stringify({success:true,data:result.Name}));
			// });
		});
	}
}