const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const log4js = require("log4js");
require("./logger_config");

const NODE_ENV = process.env.NODE_ENV || "development";
// console.log(NODE_ENV);

// Configuracion del logger dependiendo del entorno de ejecucion
const logger = NODE_ENV === "production"
  ? log4js.getLogger("productionLogger")
  : log4js.getLogger() ;

app.get("/sumar", (req, res) => {
  // res.send(str);
  const {a, b} = req.query;
  // Si algun valor (a,b) no es numerico loggea error
  const encontroValorNoNumerico = [a, b].some( el => isNaN(el))
  if (encontroValorNoNumerico) { // guard clause
    logger.error("Valor de tipo incorrecto (a:Int, b:Int)")
    res.status(400).send("Valor de tipo incorrecto (a:Int, b:Int)");
    return ;
  }
  const c = parseInt(a) + parseInt(b);
  logger.info(`Operacion exitosa Resultado ${c}`);
  res.status(200).send({suma: c});
});

// Ruta por defecto: Recurso no encontrado
app.get("*", (req, res) => {
  logger.warn(`Ruta no encontrada ${req.url}`)
  res.status(400).send(`Ruta no encontrada ${req.url}`);
});

const server = app.listen(8080, () => {
  console.log("Ejecutando servidor puerto 8080");
})

server.on("error", (err) => {
  // Manejo de errores del servidor
  logger.error(`Ocurrio un error al iniciar el servidor ${err}`)
});