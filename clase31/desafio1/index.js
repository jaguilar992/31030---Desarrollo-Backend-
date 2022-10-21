const express = require("express");
const app = express();
const compression = require("compression");
const gzipMiddleware = compression();

function generateString() {
  return Array(1000).fill("Hola que tal").join("");
}

const str = generateString();

// Hola que talHola que talHola que talHola que tal

app.get("/saludo", (req, res) => {
  res.send(str);
});

app.get("/saludozip", gzipMiddleware, (req, res) => {
  res.send(str);
});

app.listen(8080, () => {
  console.log("Ejecuntando servidor puerto 8080");
})