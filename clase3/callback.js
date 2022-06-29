// // const ejecutar = unaFuncion => unaFuncion();
// // const saludar = () => console.log("Saludos");
// // ejecutar(saludar)


// const ejecutar = (unaFuncion, params) => unaFuncion(params);

// const saludar = nombre => console.log(`Hola ${nombre}`);

// ejecutar(
//     (nombre) => console.log(`Adios ${nombre}`), 
//     "Antonio"
// );

// // saludar("Alejandro")

function escribirYLoguear(texto, callback) {
    console.log(texto);
    callback("Archivo escrito");
}

escribirYLoguear("Hola Mundo", (args)=>{
    const fecha = new Date().toLocaleDateString();
    console.log(fecha);
})