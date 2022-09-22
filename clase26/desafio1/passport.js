const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const credentiales = require("../../../../client_secret_960499033566-fnt1u6lnjkfgkrcus2002ergka0ne4j5.apps.googleusercontent.com.json")

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Login Strategy
passport.use(new GoogleStrategy({
  clientID: credentiales.web.client_id,
  clientSecret: credentiales.web.client_secret,
  callbackURL: "http://localhost:8000/callback",
  passReqToCallback: true
}, (request, accesToken, refreshToken, profile, done) => {
  done(null, profile); // req.user
}));