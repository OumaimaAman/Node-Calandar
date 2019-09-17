const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const USERNAME = 'admin',
      PASSWORD = 'admin';

passport.use(
    'login', 
    new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password'
      
    },
    (username, password, done) =>{

        if(username === USERNAME && password === PASSWORD) return done(null, true); 
        return done(null, false);
    })
)