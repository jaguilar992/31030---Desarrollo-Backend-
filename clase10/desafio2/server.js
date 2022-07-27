const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/datos", (req, res)=>{
  const {
    titulo,
    min,
    max,
    nivel
  } = req.query;

  res.render('datos', {
    titulo,
    min,
    max,
    nivel
  })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});