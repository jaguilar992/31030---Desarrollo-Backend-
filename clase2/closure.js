// Ejemplo de clausauras
// Funcion que retorna una funcion anonima
// Para acceder al scope superior

function crearGritarNombre (nombre) {
    const signosExclamacion = '!!!'
    return () => {
        console.log(`${nombre}${signosExclamacion}`);
    }
}

// const gritarCH = crearGritarNombre("coderhouse");
// gritarCH();

// crearGritarNombre("Julio")();

const c = `
Esto es la linea 1
Esto es la linea 2
Esto es la linea 3
Esto es la linea 4
`;

console.log(c);
