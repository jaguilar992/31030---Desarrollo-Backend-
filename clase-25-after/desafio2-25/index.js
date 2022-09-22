const express = require('express');
const app = express();
const PORT = 8000;

const User = require('./user.schema');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {Types} = require('mongoose');
const {connect} = require('./database');
const { comparePassword, hashPassword } = require("./utils")
connect();

passport.use("login", new LocalStrategy(async (username, password, done) => {
  const user = await User.findOne({ username });
  const passHash = user.password;
  if (!user || !comparePassword(password, passHash)) {
    return done(null, null, { message: "Invalid username or password" });
  }
  return done(null, user);
}));

passport.use("signup", new LocalStrategy({
  passReqToCallback: true
}, async (req, username, password, done) => {
  const user = await User.findOne({ username });
  if (user) {
    return done(new Error("User already exists."), null);
  }
  const address = req.body.address;
  const hashedPassword = hashPassword(password);
  const newUser = new User({ username, password: hashedPassword , address });
  await newUser.save();
  return done(null, newUser);
}));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  id = Types.ObjectId(id);
  const user = await User.findById(id);
  done(null, user);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const authMiddleware = require('./middleware');

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

const handlebars = require("express-handlebars");
const hbs = handlebars.create({
  extname: ".hbs",
  defaultLayout: "index.hbs",
  layoutsDir: __dirname + "/views/",
  partialsDir: __dirname + "/views/partials/"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views/pages");

const usersWithPasswords = [
  { username: 'user1', password: 'password1', address: 'address1' },
  { username: 'user2', password: 'password2', address: 'address2' },
  { username: 'user3', password: 'password3', address: 'address3' },
]

app.get("/", (req, res) => {
  res.redirect('/profile');
});

// Se agregan los middlewares de passport para manejar el login y el signup

app.post("/signup", passport.authenticate("signup", {
  failureRedirect: "/signup",
}) , (req, res) => {  
  req.session.user = req.user;
  res.redirect("/profile");
});

app.post("/login", passport.authenticate("login", {
  failureRedirect: "/login",
}) ,(req, res) => {
    req.session.user = req.user;
    res.redirect('/profile');
});

// El manejo de errores es automatico y en caso de fallo se redirige a la ruta 
// correpondiente

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html");
});

app.get("/profile", authMiddleware,(req, res) => {
  res.render(__dirname + "/views/pages/profile", { user: req.session.user});
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  req.logout(()=> { // Logout from passport - Method agregado a request object
    res.redirect('/login');
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Server listening :: http://localhost:${PORT}`);
});