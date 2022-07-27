const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get("/datos", (req, res)=>{
  const {
    titulo,
    min,
    max,
    nivel
  } = req.query;

  res.render('datos', {
    etiqueta: titulo,
    min,
    max,
    nivel
  })
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});