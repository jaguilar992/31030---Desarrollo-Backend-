const express = require('express');
const app = express();
const personas = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index", {personas});
});

app.post("/personas", (req, res) => {
    const {nombre, apellido, edad} = req.body;
    if (nombre && apellido && edad) {
        personas.push({nombre, apellido, edad});
        res.redirect("/");
    } else {
      res.send("Faltan datos");
    }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});