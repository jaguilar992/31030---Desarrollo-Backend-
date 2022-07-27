const express = require('express');
// const pug = require('pug');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'CoderHouse App',
    message: 'Este es un mensaje, bienvenido al motor Pug'
  });
})

app.get("/hello", (req, res) => {
  res.render("hello", {
    mensaje: "Hola mundo",
    nombre: "Juan",
    apellido: "Perez",
  });
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});