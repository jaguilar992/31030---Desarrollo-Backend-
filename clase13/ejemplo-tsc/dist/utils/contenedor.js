// const fs = require("fs");
import * as fs from "fs";
const encoding = "utf-8";
class Contenedor {
    constructor(path) {
        this.filePath = path;
        this.createFileIfNotExists();
        const data = fs.readFileSync(this.filePath, encoding);
        this.contenedor = JSON.parse(data);
    }
    createFileIfNotExists() {
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, "[]");
        }
    }
    _saveAll(data) {
        const stringData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.filePath, stringData, encoding);
    }
    save(object) {
        const lastId = this.contenedor.reduce((acc, el) => {
            return el.id > acc ? el.id : acc;
        }, 0 // Acumulador inicial
        );
        const newId = lastId + 1;
        object.id = newId;
        this.contenedor.push(object);
        this._saveAll(this.contenedor);
        return newId;
    }
    getById(id) {
        return this.contenedor.find(c => c.id === id);
    }
    getAll() {
        return this.contenedor;
    }
    deleteById(id) {
        const filtered = this.contenedor.filter(el => el.id !== id);
        this.contenedor = filtered;
        this._saveAll(filtered);
    }
    deleteAll() {
        this.contenedor = [];
        this._saveAll([]);
    }
    updateById(id, object) {
        const index = this.contenedor.findIndex(el => el.id === id);
        this.contenedor[index] = object;
        this._saveAll(this.contenedor);
    }
}
// module.exports = Contenedor // COMMONJS
export default Contenedor; // ES6
export const mifuncion = function () {
    console.log("Hola mundo");
};
