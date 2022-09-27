// node main.js 1 2 3 4 -m dev -p 8080 -d

const yargs = require("yargs");
const args = yargs(process.argv.slice(2))
  .alias({
    m: "modo",
    p: "puerto",
    d: "debug"
  })
  .default({
    modo: "prod",
    puerto: 0,
    debug: false
  })
  .argv

args.otros = args._
delete args._
console.log(args);