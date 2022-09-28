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
      // ttl: 10*60
    }),
  })
);

// USE PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.redirect('/profile');
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

// Redirige al formulario de inicio de session de Google
app.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));


// Desede Google nos va redirigir al callback que hemos configurado
// en el web client (oAuthID)
app.get("/callback", passport.authenticate("google", {
  failureRedirect: "/login" // En caso de fallo nos vuelve a mostrar al login
}), (req, res) => {
  res.redirect("/profile"); // Para redirigir en caso de exito a nuestra pagina principal
})

app.get("/profile", authMiddleware,(req, res) => {
  console.log(req.user);
  res.render(__dirname + "/views/pages/profile", { user: req.user});
});

app.post("/logout", (req, res) => {
  req.logout(()=> { // Logout from passport - Method agregado a request object
    res.redirect('/login');
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Server listening :: http://localhost:${PORT}`);
});