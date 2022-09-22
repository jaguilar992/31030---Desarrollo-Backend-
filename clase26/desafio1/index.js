const express = require('express');
const app = express();
const passport = require('passport');
const authMiddleware = require('./middleware');
const hbs = require('./handlebars.engine');
require('./passport');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views/pages");
const PORT = 8000;

const MongoStore = require('connect-mongo');
const session = require('express-session');
app.use(session({
    secret: 'STRING_TO_SIGN_SESSION_ID',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: 'mongodb://localhost:27017/sessions',
      retries: 0,
      ttl: 60 * 60 * 24, // 1 day
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

app.get("/google/callback", passport.authenticate("google", {
  failureRedirect: "/login"
}), (req, res) => {
  res.redirect("/");
});

app.get("/", authMiddleware, (req, res) => {
  res.render("profile", { user: req.user });
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html");
});

app.get("/profile",(req, res) => {
  res.render(__dirname + "/views/pages/profile", { user: req.session.user});
});

app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      return ;
    }
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Server listening :: http://localhost:${PORT}`);
});