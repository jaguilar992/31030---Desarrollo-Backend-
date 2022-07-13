const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    // throw new Error("Este es un error");
    res.send({mensaje: "Bienvenidos a la ruta raiz"});
});

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

server.on("error", error=>console.log(`Error: ${error}`))