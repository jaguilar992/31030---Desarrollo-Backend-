import Contenedor from "./contenedor.js";
import { mifuncion } from "./contenedor.js";

const c = new Contenedor("./db.json");
c.save({name: "Antonio", age: 30});

console.log(c.getAll());

mifuncion();