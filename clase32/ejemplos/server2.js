const express = require("express");
const app = express();
const crypto = require("crypto");
const PORT = parseInt(process.argv[2]) || 8080;
const users = {}

// Crear el usuario dentro del objeto users
app.get("/user", (req, res) => {
    const {user, passwd} = req.query;
    if (!user || !passwd || users[user]) {
        return res.sendStatus(400);
    }
    const salt = crypto.randomBytes(128).toString("base64");
    const hash = crypto.pbkdf2Sync(passwd, salt, 10000, 512, "sha512");
    users[user] = {salt, hash: hash.toString(), user}

    res.status(200).json(users[user]);
});

// Login sincrono
app.get("/auth_bloq", (req, res) => {
    const {user, passwd} = req.query;
    if (!user || !passwd || !users[user]) {
        return res.sendStatus(400);
    }
    const {salt, hash} = users[user];
    const toVerifyHash = crypto.pbkdf2Sync(passwd, salt, 10000, 512, "sha512");
    // console.log(hash, toVerifyHash);
    
    if (hash.toString() === toVerifyHash.toString()) {
        res.status(200).send({ok: "logged in"})
    } else {
        res.status(401).send({error: "Unauthorized"});
    }
});

// Login asincrono
app.get("/auth_no_bloq", (req, res) => {
    const {user, passwd} = req.query;
    if (!user || !passwd || !users[user]) {
        return res.sendStatus(400);
    }
    const {salt, hash} = users[user];
    crypto.pbkdf2(passwd, salt, 10000, 512, "sha512", (err, toVerifyhash) => {
        if (hash.toString() === toVerifyhash.toString()) {
            res.status(200).send({ok: "logged in"})
        } else {
            res.status(401).send({error: "Unauthorized"});
        }
    });
});

app.listen(PORT, () => {
    console.log(`PID: ${process.pid}. Servidor express escuchando en puerto ${PORT}`);
});

/**
 // Pasos 
 1. Crear el usuario
 // curl -X GET "http://localhost:8080/user?user=anthony&passwd=asd.456"
 2. iniciamos el servidor con el profiler escuchando
 node -prof server2.js

 3. Creamos la batería de tests con artillery
 artillery quick --count 50 -n 10 http://localhost:8080\?auth_no_bloq\?user\=anthony\&passwd\=asd.456 > resultados_no_bloq.txt

 4. Exportamos el log del profiler de node con:
 node --prof-process <archivo.log> > archivo_resumen.txt
 * 
 */