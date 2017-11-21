'use strict';

const DatabaseUtility = require('../database/DatabaseUtility.js')

module.exports = class MemberManager{

	constructor(){
		this.db = DatabaseUtility.Getdb();
	}

	AddCustomerMember(attribute,callback){

	}

}