const http = require("http");

const server = http.createServer((peticion, respuesta) => {
    const fechaYHora = new Date(Date.now());
    const hora = fechaYHora.getHours();
    let saludo;
    if (hora >=6 && hora <=12) {
        saludo = "Buenos días"
    } else if (hora >= 13 && hora<=19) {
        saludo = "Buenas Tardes"
    } else if (hora>=20 && hora<=5) {
        saludo = "Buenas noches"
    }
    respuesta.end(saludo);
});

const serverConected = server.listen(8080, () => {
    console.log(`Server escuchando ${serverConected.address().port}`);
});