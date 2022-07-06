const productos = [
    { id: 1, nombre: "Escuadra", precio: 323.45 },
    { id: 2, nombre: "Calculadora", precio: 234.56 },
    { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
    { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
    { id: 5, nombre: "Reloj", precio: 67.89 },
    { id: 6, nombre: "Agenda", precio: 78.9 }
]

let buffer = "";
let precio_total = 0;

productos.forEach(el => {
    buffer = buffer + el.nombre + ", ";
    precio_total += el.precio;     
})
// Para calcular el precio total con reduce
// const precio_total2 = productos.reduce((acc, el)=> {
//     return acc + el.precio
// },0);

let promedio = precio_total / productos.length;


// console.log(buffer);
// console.log(precio_total);
// console.log(promedio);

// Determinar el precio menor
/**
 * Creamos una variable 'menor' con un valor extremadamente grande
 * let menor = 1e99; // Es una buena cota superior 
 * */ 
let menor = Number.POSITIVE_INFINITY; // Infinito positivo
productos.forEach(p => {
    if (p.precio < menor) {
        menor = p.precio
    }
});
// console.log(menor);

// Otra forma de calcularlo
// javascript provee la función Math.min
// const menor2 = Math.min(...productos.map(p=>p.precio));
// console.log(menor2)

// Determinar el precio mayor
/**
 * Creamos una variable 'mayor' con un valor extremadamente pequeño
 * let mayor = -1e99; // Es una buena cota inferior 
 * */ 
let mayor = Number.NEGATIVE_INFINITY; // Infinito negativo
productos.forEach(p => {
    if (p.precio > mayor) {
        mayor = p.precio
    }
});
// console.log(mayor);

// Otra forma de calcularlo
// javascript provee la función Math.max
// const mayor2 = Math.max(...productos.map(p=>p.precio));
// console.log(mayor2)

const info = {
    promedio: promedio,
    precio_total: precio_total,
    mayor: mayor,
    menor: menor,
    lista: buffer
};
console.log(info)
