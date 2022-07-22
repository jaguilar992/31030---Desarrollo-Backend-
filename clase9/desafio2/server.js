const express = require("express");
const fs = require("fs");

const app = express();

app.engine('cte', (filePath, options, callback) => {
    fs.readFile(filePath, "utf-8", (err, content) => {
        if (err) callback(new Error(err));
        // Logica de renderizado
        // forEach
        let rendered = content.toString();
        Object.keys(options).forEach(key => {
            if ((typeof options[key]) === 'string') {
                const value = options[key];
                rendered = rendered.replace(`^^${key}$$`, value);
            }
        });
        callback(null, rendered);
    })
});
app.set('views', './views');
app.set('view engine', 'cte');

app.get('/cte1', (req, res)=> {
    const options = {titulo: "Algo", mensaje: "Mensaje", autor: "Fulano", version: "1"}
    res.render('plantilla1', {titulo: "Algo", mensaje: "Mensaje", autor: "Fulano", version: "1"});
});

app.get('/cte2', (req, res) => {
    const fecha = new Date(Date.now()).toLocaleString();
    const options = {nombre: "Juan", apellido: "Lopez", fecha}
    res.render('plantilla2', options);
})

const PORT = 8080;
app.listen(PORT , () => {
    console.log(`Escuchando en el puerto ${PORT}`)
});