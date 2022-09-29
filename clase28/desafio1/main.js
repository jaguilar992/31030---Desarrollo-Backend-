const processName = process.argv[1];
const args = process.argv.slice(2);

function print (d) {
  process.stdout.write(JSON.stringify(d) + "\n");
}

process.on("uncaughtException", (err) => {
  console.log({
    error: err.message,
    numeros
  })
});


const numeros = args.map(n => parseInt(n));

if (numeros.length === 0) {
  throw new Error("Entrada vacia");
}

const promedio = numeros.reduce((a, b) => parseInt(a) + parseInt(b)) / numeros.length;
const suma = numeros.reduce((a,b) => parseInt(a) + parseInt(b));
const min = Math.min(...numeros); // Math.min(4,8,3,5)
const max = Math.max(...numeros); // Math.max(4,8,3,5)

const tipos = numeros.map(n => typeof n);
const invalidTypes = numeros.filter( n => isNaN(n) );

if (invalidTypes.length > 0) {
  throw new Error("Invalid type provided in arguments");
}

const ejecutable = processName;
const pid = process.pid;

console.log({
  numeros,
  promedio,
  suma,
  min,
  max,
  ejecutable,
  pid
});