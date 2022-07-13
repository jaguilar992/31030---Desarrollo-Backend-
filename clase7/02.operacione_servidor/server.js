const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.post("/api/usuario", (req, res)=>{
//     console.log(req.body);
//     res.json(req.body);
// })

app.get("/api/sumar/:a/:b", (req, res)=> {
    const a = req.params.a;
    const b = req.params.b;
    res.json({resultado : parseInt(a) + parseInt(b)});
});

app.post("/api", (req, res) => {
    // Objeto body de la peticion
    // req.body;
    res.json({mensaje: "ok post"})
});

app.put("/api/:id", (req, res) => {
    // const id = req.params.id

    // Objeto body de la peticion
    // req.body;

    // modificar el usuario con el id
    res.json({mensaje: "ok put"});
});

app.delete("/api/:id", (req,res) => {
    // const id = req.params.id
    // Borrar el usuario con el id
    res.json({mensaje: "ok delete"});
});

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

server.on("error", error => console.log(`Error: ${error}`))