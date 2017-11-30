'use strict';

var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Express = require('express');
var BodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');


var users = {
    mark: {
        username: 'mark',
        password: '1234',
        id: 1,
    },
    node: {
        username: 'node',
        password: '5678',
        id: 2,
    },
}


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
    		usernameField: 'username',
    		passwordField: 'password',
		},
    	function (username, password, done) {
        	var user = users[username];

        	if (user == null) 
        	{
            	return done(null, false, { message: 'Invalid user' });
        	};

        	if (user.password !== password) 
        	{
            	return done(null, false, { message: 'Invalid password' });
        	};
	        done(null, user);
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
		    done(null, user.id);
		});

		Passport.deserializeUser(function (user_id,done) {
		    done(null, user_id);
		});
	}

	SetAPI(){
		var self = this;

		this.router.use('*',function(req,res,next){
			res.header('Access-Control-Allow-Origin', 'http://127.0.0.1');
			res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
			res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
			next();
		});

		this.router.post(
		    '/',
		    Passport.authenticate('local',{session: true}),
		    function (req, res) {
		        res.send('User ID ' + req.user.id.toString());
		    }
		);

		this.router.get('/getInfo',function(req,res){
		    const user = req.user;
		    res.send(JSON.stringify(user));
		});
	}
}
