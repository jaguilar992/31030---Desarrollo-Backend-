const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const credentials = require('../../../../client_secret_15110094636-81ajcnir7qfqtu8qapjfq6ge59gg2k2q.apps.googleusercontent.com.json');

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
;
// Login Strategy
passport.use(new GoogleStrategy({
    clientID: credentials.web.client_id,
    clientSecret: credentials.web.client_secret,
    callbackURL: "http://localhost:8000/google/callback",
    passReqToCallback: true
}, (request, accessToken, refreshToken, profile, done) => {
    // console.log(profile);
    done(null, profile);
}));
