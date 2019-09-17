const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

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

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'CLESECRET'
},
function (jwtPayload, next) {
    USERNAME === jwtPayload.username ? next(null, jwtPayload) : next(new Error('username not valid'));
}
));