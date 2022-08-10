// const lista:Array<number> = [1,2,3,4,5];
import Contenedor, { mifuncion } from "./utils/contenedor.js";
const generateColor = function () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};
mifuncion();
const color = generateColor();
console.log(color);
const c = new Contenedor("./db.json");
c.save({ firstname: "Steve", lastname: "Seagal" });
console.log(c.getAll());
