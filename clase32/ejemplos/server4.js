const express = require("express");
const cluster = require("cluster");
const {cpus} = require('os');
const cpuNum = cpus().length;

// console.log(process.argv)

const PORT = parseInt(process.argv[2]) || 8080;
const modoCluster = process.argv[3] === 'CLUSTER';

function generarNumerosAleatorios(n=10000) {
    const arrayNumeros = [];
    for(let i=0; i<n ; i++) {
        const r = Math.floor(Math.random() * 10);
        arrayNumeros.push(r);
    }   
    return arrayNumeros;
}

if (modoCluster && cluster.isPrimary) {
    console.log(`Cluster iniciado. CPUS: ${cpuNum}`);
    console.log(`PID: ${process.pid}`);
    for (let i = 0; i < cpuNum; i++) {
      cluster.fork();
    }
  
    cluster.on("exit", worker => {
      console.log(`${new Date().toLocaleString()}: Worker ${worker.process.pid} died`);
      cluster.fork();
    });
} else {
    const app = express();
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
}
