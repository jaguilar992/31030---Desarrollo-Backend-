const express = require("express");
const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

function generarNumerosAleatorios(n=10000) {
    const arrayNumeros = [];
    for(let i=0; i<n ; i++) {
        const r = Math.floor(Math.random() * 10);
        arrayNumeros.push(r);
    }   
    return arrayNumeros;
}

// Crear el usuario dentro del objeto users
app.get("/randoms-debug", (req, res) => {
    const numeros = generarNumerosAleatorios();
    console.log(numeros);
    res.json(numeros);
});

// Login sincrono
app.get("/randoms-nodebug", (req, res) => {
    const numeros = generarNumerosAleatorios();
    res.json(numeros);
});

app.listen(PORT, () => {
    console.log(`PID: ${process.pid}. Servidor express escuchando en puerto ${PORT}`);
});