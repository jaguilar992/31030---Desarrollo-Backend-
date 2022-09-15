const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');

// const RedisStore = require('connect-redis')(session);

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

app.use((req, res, next) => {
  if (req.session.name) {
    req.session.ultimaActualizacion = Date.now();
  }
  next();
});

// // Middleware para comprobar si el usuario no ha estado inactivo
// app.use((req, res, next) => {
//   const now = Date.now();
//   const diff = now - req.session.ultimaActualizacion;
//   // diff < 60 * 1000 => 1 minuto
//   // res.status(401) => 401 Unauthorized
// });

app.get("/", (req, res) => {
  const name = req.query.name;
  if (name) {
    req.session.name = name;
  }

  if (req.session.visitas) { // En caso de que visitas exista en la session se incrementa
    req.session.visitas++;
  } else {
    req.session.visitas = 1; // En caso de que no exista se crea con valor 1
  }

  const _saved = req.session.name || "";

  if (req.session === 1) {
    res.send(`Bienvenido ${_saved}, esta es tu primera visita`);
  } else {
    res.send(`Bienvenido ${_saved}, esta es tu visita numero: ${req.session.visitas}`);
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if(err) {
      res.send("Error al cerrar sesion");
    } else {
      res.send("Sesion cerrada");
    }
  });
});

app.listen(8000, (req, res) => {
  console.log('Servidor corriendo en el puerto 8000');
});
