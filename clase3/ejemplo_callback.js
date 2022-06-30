const operacion = (n,m,callback) => callback(n,m);


const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => a / b;
const modulo = (a,b) => a % b;


console.log(operacion(1,2,suma));
console.log(operacion(1,2,resta));
console.log(operacion(1,2,division));
console.log(operacion(1,2,multiplicacion));
console.log(
    operacion(1,2,modulo)
);

console.log(
    operacion(1, 2, (a,b) => a % b )
);