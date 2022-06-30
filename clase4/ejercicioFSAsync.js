const fs = require("fs");


// fs.readFile("./files/archivo1.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log("Hola");

// fs.rmdir("./carpeta", err=> {
//     if (err) {
//         console.log(err);
//     }
// });

fs.readdir("./", (err, files) => {
    if (err) {
        throw new Error("No se pudo leer");
    } else {
        console.log(files);
    }
})