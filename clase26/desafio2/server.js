const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { idleMiddleware, refreshSessionTimeMiddleware } = require('./middlewares');
require("./handlebars.engine");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  store: new MongoStore({
    mongoUrl: 'mongodb://localhost:27017/sessions',
    ttl: 60 * 60 * 24 * 7, // 1 week
    retries: 0
  }),
  secret: 'STRING_SECRETA',
  resave: false,
  saveUninitialized: true,
}));

// Idle session timeout middleware
app.use(idleMiddleware);
// Refresh session timeout
app.use(refreshSessionTimeMiddleware);

app.get("/", (req, res) => {
  const name = req.session.name;
  if (!name) {
    res.redirect("/login");
    return;
  }

  if (req.session.visitas) { // En caso de que visitas exista en la session se incrementa
    req.session.visitas++;
  } else {
    req.session.visitas = 1; // En caso de que no exista se crea con valor 1
  }

  res.render("index", { name, visits: req.session.visitas});
});

app.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if(err) {
      res.send("Error al cerrar sesion");
    } else {
      res.redirect("/login");
    }
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  req.session.name = name;
  res.redirect("/");
});

app.listen(8000, (req, res) => {
  console.log('Servidor corriendo en el puerto 8000');
});
