class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    static saludo = "Buenas noches";

    saludoCompleto() {
        console.log(`Hola soy ${this.nombre}`)
    }

    saludoEstatico () {
        console.log(Persona.saludo);
    }
}

const p = new Persona("Juan", 18);
const persona2 = new Persona("Ana", 17);
// console.log(p);
// console.log(persona2);
// p.saludoCompleto()
// p.saludoEstatico();
console.log(Persona.saludo)



// Auto
// color, numeroPuertas, numeroRuedas, arrancar(), reversa()

//elAutoDelProfe
//verde, 4, 4,
//gasolina Premium

//elAutoDeJuan
//color,0,3
//gasolina Premium