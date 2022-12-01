const express = require("express");

const Contenedor = require("../utils/contenedor-archivo")
const contenedor = new Contenedor("products.json");

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
});
productsRouter.get("/:id", (req, res) => {
  
});

productsRouter.post("/", (req, res) => {
  const product = req.body;
  contenedor.save(product);
  res.json(product);
});

productsRouter.put("/:id", (req, res) => {

});
productsRouter.delete("/:id", (req, res) => {

});

module.exports = productsRouter;