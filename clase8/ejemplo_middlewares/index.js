const express = require("express");
const { Router } = express;
const app = express();
const personas = [];
const mascotas = [];

// Utilizar JSON en las request (Cuerpo)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// Middleware a nivel de aplicacion
app.use((req, res, next) => {
    const timestamp = Date.now().toLocaleString();
    console.log(`[${timestamp}]: ${req.method}: ${req.route}`)
    next();
});

const routerPersona = Router();
const routerMascotas = Router();

// middleware Router
routerMascotas.use((req, res, next) => {
    console.log(`Peticion mascotas`)
    next();
})

// Rutas para personas, 
// GET 
routerPersona.get("/", (req, res) => {
    res.json(personas);
});

routerPersona.post("/", (req, res) => {
    // 1-
    // const nombre = req.body.nombre;
    // const apellido = req.body.apellido;
    // const edad = req.body.edad;
    // 2-
    // const {nombre, apellido, edad} = req.body;
    // personas.push({nombre, apellido, edad})

    // 3-
    const persona = req.body;
    personas.push(persona);
    res.json(persona);
});

// Rutas para mascotas
routerMascotas.get("/", (req,res) => {
    res.json(mascotas);
});

routerMascotas.post("/", (req, res) => {
    // 1-
    // const nombre = req.body.nombre;
    // const raza = req.body.raza;
    // const edad = req.body.edad;
    // 2-
    // const {nombre, raza, edad} = req.body;
    // mascotas.push({nombre, raza, edad})

    // 3-
    const mascota = req.body;
    mascotas.push(mascota);
    res.json(mascota);
});

app.use("/mascotas", routerMascotas);
app.use("/personas", routerPersona);

const PORT = 3000;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
});

server.on("error", error => console.log(`Error: ${error}`))