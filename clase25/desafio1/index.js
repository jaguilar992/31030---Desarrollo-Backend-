const express = require('express');
const app = express();
const PORT = 8000;

const auth = require("./middleware");

const session = require('express-session');

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


const usersWithPasswords = [
  { username: 'user1', password: 'password1', address: 'address1' },
  { username: 'user2', password: 'password2', address: 'address2' },
  { username: 'user3', password: 'password3', address: 'address3' },
];

const MongoStore = require('connect-mongo');
app.use(session({
    secret: 'CLAVE_SECRETA',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: 'mongodb://localhost:27017/sessions',
      retries: 0,
      ttl: 60 * 60 * 24, // 1 day
    }),
  })
);

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const address = req.body.address;
  // Verificar que el usuario no exista
  const user = usersWithPasswords.find((user) => user.username === username);
  if (user) { // Guard clause
    res.status(400).send("User already exists"); // Status 400: Bad Request
    return ; // undefined
  }
  usersWithPasswords.push({username, password, address});
  // res.send({
  //   message: "User created successfully",
  //   user: {username, address},
  // });
  res.redirect('/login');
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = usersWithPasswords.find((user) => user.username === username);
  if (!user || user.password !== password ) {
    res.status(404).send({ // Not found
      message: "Invalid username or password",
    });
    return ;
  }
  req.session.user = user;
  res.redirect("/profile");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/signup.html");
});

app.get("/profile", auth, (req, res) => { // Ruta privada
  if (!req.session.contador) {
    req.session.contador = 1;
  } else {
    req.session.contador++;
  }
  res.render("profile", {user: req.session.user, contador: req.session.contador});
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.listen(PORT, () => {
  console.log(`⚡ Server listening :: http://localhost:${PORT}`);
});