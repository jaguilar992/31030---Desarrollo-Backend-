const fs = require("fs");

// const data = fs.readFileSync("./files/archivo1.txt", "utf-8");
// console.log(data);

// fs.writeFileSync("./files/archivo3.txt", "BIENVENDOS\nCODERS");

// fs.appendFileSync("./files/archivo3.txt", "Hola");

fs.unlinkSync("./files/archivo3.txt");