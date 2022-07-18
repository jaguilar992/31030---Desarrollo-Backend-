const express = require("express");

const Contenedor = require("./utils/contenedor");
const dbName = "db.json";
const contenedor = new Contenedor(dbName);
const { auth } = require("./middlewares/auth");
const routerPersonas = require("./routes/personas");
const upload = require("./storage");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use((req, res, next) => {
    const date = new Date(Date.now());
    console.log(date.toLocaleString());
    next();
} )

// La lista de personas almacenadas
// GET /api/personas/
// params: req request, peticion
//         res response respuesta
app.get("/api/personas", (req, res) => {
    const listadoUsuarios = contenedor.getAll();
    res.json(listadoUsuarios)
    console.log(req.query)
    // req.query.q
    // req.query.maxSize
    // res.send()
})

app.get("/api/personas/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = contenedor.getById(id);
    res.json(usuario);
});

app.post("/api/personas", upload.single("foto"), (req, res) => {
    // const token = req.token;
    // console.log(token);
    const file = req.file;
    console.log(file);
    res.json({success: true})
});

app.use("/api/personas2", routerPersonas);

const server = app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`)
})