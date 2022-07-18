const { Router } = require("express")

const routerPersonas = new Router();

// routerPersonas.use(nombre_funcion);

routerPersonas.get("/", (req, res) => {
    res.json({message: "Personas Router"})
})

module.exports = routerPersonas;


// /api/personas2/