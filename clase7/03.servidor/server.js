const express = require("express");
const app = express();
let frase = "Hola Mundo";

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/palabras", (req, res) => {
    const agregada = req.body.agregada;
    frase = `${frase} ${agregada}`;
    const pos = frase.split(" ").length;
    res.json({
        agregada: agregada,
        pos: pos
    })
});

app.put("/api/palabras/:pos", (req, res)=> {
    const pos = parseInt(req.params.pos);
    const palabra = req.body.palabra;
    let fraseDividida = frase.split(" ");
    const anterior = fraseDividida[pos - 1];

    fraseDividida[pos - 1] = palabra;
    frase = fraseDividida.join(" "); // Actualizacion de la palabra
    console.log(frase);

    const actualizada = palabra;
    res.json({
        actualizada: actualizada,
        anterior: anterior
    })
})



const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

server.on("error", error => console.log(`Error: ${error}`))