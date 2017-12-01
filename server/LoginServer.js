'use strict';

var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Express = require('express');
var BodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MemberManager = require('./MemberManager.js');

module.exports = class{
	
	constructor(app,router){
		this.app = app;
		this.router = router;
		this.SetStrategy();
		this.InitialPassport();
		this.SetAPI();
	}

	SetStrategy(){
		var localStrategy = new LocalStrategy({
    		usernameField: 'Email',
    		passwordField: 'Password',
		},
    	function (email, password, done) {
    		new MemberManager().IsSignInCorrect(email,password,function(err,result){
    			if(err || (!result))
    			{
            		return done(null, false, { message: 'Invalid user' });
    			}

    			if(!result.success)
    			{
            		return done(null, false, { message: 'Invalid password' });
    			}
	        	done(null, result.user);
    		});
    	});
		Passport.use('local', localStrategy);
	}

	InitialPassport(){
		var self = this;
		this.app.use(BodyParser.urlencoded({ extended: false }));
		this.app.use(BodyParser.json());
		this.app.use(cookieParser());
		this.app.use(session( { secret: "test",resave: false, saveUninitialized: false, }));
		this.app.use(Passport.initialize());
		this.app.use(Passport.session());

		Passport.serializeUser(function (user, done) {
		    done(null, user.Email);
		});

		Passport.deserializeUser(function (user_email,done) {
		    done(null, user_email);
		});
	}

	SetAPI(){
		var self = this;

		this.router.post(
		    '/',
		    Passport.authenticate('local',{session: true}),
		    function (req, res) {
		        res.send('User Name ' + req.user.Email.toString());
		    }
		);

		this.router.get('/getUserName',function(req,res){
			if(!req.user)
			{
				res.send(JSON.stringify({success:false}));
			}
			else
			{
				new MemberManager().GetMemberFromEmail(req.user,function(err,result){
			    	res.send(JSON.stringify({success:true,data:result.Name}));
		    	});
			}
		});

		// does not test at all
		self.router.get('/logout',function (req, res) {
			req.logout();
		    delete req.session;
		    console.log('logged out');
		    //res.sendFile(path.resolve('./public/logout.html'));
		});
	}
}
