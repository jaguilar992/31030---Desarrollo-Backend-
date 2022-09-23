const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const SECRET = "LasBaleadasSonDeliciosas"; // Agregar al .env
const validateJWT = require("./middleware");

const users = [
  {email: "email@gmail.com", password: "1234"},
  {email: "email1@gmail.com", password: "1234"},
  {email: "email2@gmail.com", password: "1234"},
];

app.use(express.json())
app.use(express.urlencoded({extended: true}));

// app.use(express.static("public"));


app.post("/login", (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(400).send({message: "Debe incluir email y password"});
    return;
  }
  const user = users.find(user => user.email === email);
  if (!user || user?.password !== password) {
    res.status(401).send({message: "credenciales invalidas"});
    return;
  }
  const token = jwt.sign({
    data: {
      email: user.email,
      typeUser: "admin",
    }
  }, SECRET, {expiresIn: "1d"});

  res.send({
    user: {
      email: user.email,
      typeUser: "admin",
    }, 
    token
  })
})

app.get("/", validateJWT, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(8000, () => {
  console.log("Sirviendo en el puerto 8000");
})