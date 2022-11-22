class Singleton {
  private nombre: String;
  private static instance;

  private constructor (nombre) {
    this.nombre = nombre;
  }

  static getSingleton() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton("Carlos");
    }
    return Singleton.instance;
  }
}

const singleton1 = Singleton.getSingleton();
const singleton2 = Singleton.getSingleton();

console.log(singleton1 === singleton2);
console.log(singleton1.nombre);
console.log(singleton2.nombre);

// Consider using Deno
// deno run src/scripts/singleton.js