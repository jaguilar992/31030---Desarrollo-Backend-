const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/public", express.static("public"))
app.use("/files", express.static("files"))

const PORT = 3000;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
});

server.on("error", error => console.log(`Error: ${error}`))