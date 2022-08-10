// const lista:Array<number> = [1,2,3,4,5];

// lista.map((x:number)=> x+1)
//   .forEach((x:number) => console.log(x))


// const s:string = "Hola Mundo";
// s.concat("Hi");
import Contenedor, { mifuncion } from "./utils/contenedor.js";

const generateColor = function() : string {
  const red:number = Math.floor(Math.random() * 256);
  const green:number = Math.floor(Math.random() * 256);
  const blue:number = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

mifuncion();

const color:string = generateColor();
console.log(color);

const c = new Contenedor("./db.json");
c.save({firstname: "Steve", lastname: "Seagal"});
console.log(c.getAll());
