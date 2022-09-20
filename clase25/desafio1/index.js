const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

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

const usersWithPasswords = [
  { username: 'user1', password: 'password1', address: 'address1' },
  { username: 'user2', password: 'password2', address: 'address2' },
  { username: 'user3', password: 'password3', address: 'address3' },
]


app.post("/sign_up", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const address = req.body.address;
  const user = usersWithPasswords.find(user => user.username === username);
  if (user) {
    res.status(400).send("User already exists");
  } else {
    usersWithPasswords.push({ username, password, address });
    res.send({
      message: "User created successfully",
      user
    });
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = usersWithPasswords.find(user => user.username === username);
  if (user && user.password === password) {
    req.session.user = user;
    res.redirect('/profile');
  } else {
    res.status(401).send({ success: false });
  }
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/profile", authMiddleware,(req, res) => {
  console.log(req.session.user);
  res.render(__dirname + "/views/pages/profile", { user: req.session.user});
});

app.get("/", (req, res) => {
  res.redirect('/profile');
});

app.listen(PORT, () => {
  console.log(`⚡ Server listening :: http://localhost:${PORT}`);
});