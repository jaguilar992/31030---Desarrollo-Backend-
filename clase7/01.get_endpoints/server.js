const express = require("express");
const app = express();

// app.get("/", (req, res)=>{
//     console.log(req.query);
//     res.json({mensaje: "Hola"});
// });

// app.get("/usuario/:id", (req, res)=>{
//     console.log(req.params.id);
//     res.json({idUsuario: req.params.id});
// })
const frase = "Hola mundo como estan";
//
app.get('/api/frase', (req, res) => {
    res.json({ frase: frase });
    // res.json({ frase })
});

app.get("/api/letras/:num", (req, res) => {
    const num = req.params.num;
    if (isNaN(num)) {
        res.json({error: "Error: el parametro no es un número"});
        return 
    }
    if (num < 1 || num > frase.length) {
        res.json({error: "Error: el número esta fuera de rango"});
        return 
    }
    const letra = frase[ parseInt(num) - 1 ];
    res.json({letra: letra});
});

app.get("/api/palabras/:num", (req, res) => {
    const num = req.params.num;
    const fraseDividida = frase.split(" ");

    if (isNaN(num)) {
        res.json({error: "Error: el parametro no es un número"});
        return 
    }
    if (num < 1 || num > fraseDividida.length) {
        res.json({error: "Error: el número esta fuera de rango"});
        return
    }
    const palabra = fraseDividida[parseInt(num) - 1];
    res.json({palabra: palabra});
});


const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
})

server.on("error", error => console.log(`Error: ${error}`))