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

var localStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
},
    function (username, password, done) {
        user = users[username];

        if (user == null) {
            return done(null, false, { message: 'Invalid user' });
        };

        if (user.password !== password) {
            return done(null, false, { message: 'Invalid password' });
        };

        done(null, user);
    }
)

Passport.use('local', localStrategy);

var app = Express();
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: "test",
    resave: false,
    saveUninitialized: false,
}));
app.use(Passport.initialize());
app.use(Passport.session());

Passport.serializeUser(function (user, done) {
    done(null, user.id);
});

Passport.deserializeUser(function (user_id,done) {
    console.log("deserial~~~");
    done(null, user_id);
})

app.post(
    '/login',
    Passport.authenticate('local',{session: true}),
    function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send('User ID ' + req.user.id.toString());
    }
);

app.get('/getInfo',function(req,res){
    const user = req.user;
    res.send(user);
})

app.listen(3000, function () {
    console.log('Listening on 3000');
});