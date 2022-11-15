const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const checkPalindrome = require("palindomator");
const {suma, resta, division, multiplicacion} = require("dependemator");

app.get("/", (req, res) => {
  res.send("Hola yarn");
});

app.get("/palindrome", (req, res) => {
  const {string} = req.query;
  res.send({
    isPalindrome: checkPalindrome(string)
  })
});

app.get("/suma", (req, res) => {
  let {a,b} = req.query;
  a = parseInt(a);
  b = parseInt(b);

  res.send({
    resultadoSuma: suma(a,b) 
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} `);
});