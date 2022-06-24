class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuenta = 0;
    }

    static cuentaTotal = 0;

    aumentarCuenta() {
        this.cuenta += 1;
        Contador.cuentaTotal += 1;
    }
}

const cPedro = new Contador("Pedro");
const cJuan = new Contador("Juan");

console.log(cPedro);
console.log(cJuan);
console.log("------------------")
cPedro.aumentarCuenta();
cJuan.aumentarCuenta();
cJuan.aumentarCuenta();
console.log(cPedro);
console.log(cJuan);

console.log(`El contador total es: ${Contador.cuentaTotal}`);