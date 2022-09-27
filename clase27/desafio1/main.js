// node main.js 1 2 3 4 -m dev -p 8080 -d

const parseArgs = require('minimist');

const opciones =  {
  alias: {
    m: "modo",
    p: "puerto",
    d: "debug"
  },
  default: {
    modo: "prod",
    puerto: 0,
    debug: false
  }
}
const objeto = parseArgs(process.argv.slice(2), opciones);
objeto.otros = objeto._;
delete objeto._;
console.log(objeto)