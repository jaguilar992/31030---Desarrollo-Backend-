const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');

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

// --- Handlerbars engine ------ 
const hbs = require('express-handlebars');
const handlebars = hbs.create({
  layoutsDir: __dirname + '/views/',
  defaultLayout: 'main',
  extname: 'hbs',
  partialsDir: '/views/partials',
  viewsDir: '/views/pages',
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', 'views/pages');
// ----------------------------------------------
const MAX_IDLE_TIME = 10; // segundos

// Idle session timeout middleware
app.use((req, res, next) => {
  const diff = Date.now() - req.session.ultimaActualizacion; // Diferencia entre la ultima actualizacion y el momento actual
  console.log(diff);
  if (req.session.name && diff > MAX_IDLE_TIME * 1000) {
    req.session.destroy();
    res.redirect('/login');
    return;
  }
  next();
});

// Refresh session timeout
app.use((req, res, next) => {
  if (!req.session.ultimaActualizacion && req.session.name) {
    req.session.ultimaActualizacion = Date.now(); // Timestamp de la ultima actualizacion
    next();
    return;
  }

  const diff = Date.now() - req.session.ultimaActualizacion;
  if (req.session.name && diff < MAX_IDLE_TIME * 1000) {
    req.session.ultimaActualizacion = Date.now();
    next();
    return;
  }
  next();
});

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
