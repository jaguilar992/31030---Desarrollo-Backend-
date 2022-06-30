const fs = require("fs");

const funcionGuardar = () => {
    const date = new Date(Date.now()).toLocaleString();
    fs.writeFileSync("./fyh.txt", date);
}

const funcionLeer = () => {
    try {
        const data = fs.readFileSync("./fyh.txt", "utf-8");
        console.log(data);
    } catch (err) {
        throw new Error("El archivo no se encontró");
    }
}

// funcionGuardar();
funcionLeer();

