const Contenedor = require("./utils/contenedor");
const dbNombre = "./db.json";
const contenedor = new Contenedor(dbNombre);

// contenedor.save({
//     nombre: "Antonio",
//     apellido: "Aguilar",
//     pais: "Honduras"
// })

contenedor.deleteById(5);
console.log(contenedor.getAll());
console.log(contenedor.getById(2));