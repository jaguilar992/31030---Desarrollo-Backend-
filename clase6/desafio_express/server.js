const express = require("express");
const app = express();
let visitas = 0;

app.get('/', (req, res)=>{
    res.send("<h1 style='color: blue'>Bienvenidos al servidor express</h1>");
});

app.get('/visitas', (req, res)=>{
    visitas++;
    res.send(`La cantidad de visitas ${visitas}`);
})

app.get('/fyh', (req, res)=>{
    const fechaYHora = new Date(Date.now()).toLocaleString()
    res.send({fyh: fechaYHora})
})

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

server.on("error", error=>console.log(`Error: ${error}`))