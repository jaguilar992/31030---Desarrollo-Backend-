// https://desarrolloweb.com/articulos/herencia-clases-javascript-ecmascript.html

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saluda () {
    console.log(`Hola me llamo: ${this.nombre}`);
  }
}


class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
  }

  ladra() {
    console.log("Guau");
    this.saluda();
  }
}

const firulais = new Perro("El Firu");
firulais.ladra();