/*
    Invocar el archivo:
    deno run --allow-write  main.ts 6 4 9 1
*/

import * as colors from "https://deno.land/std@0.100.0/fmt/colors.ts";

//Lectura de argumentos de entrada
const args = Deno.args.map((num) => Number(num));

//Ordenar el arreglo de numero asc
const numeros = args.sort((a, b)=> a - b);

//Calculo de los valores
const minimo = numeros[0];
const maximo = numeros[numeros.length - 1];
const promedio = (() => {
    let suma = 0;
    numeros.forEach((num) => suma += num);
    return suma / numeros.length;
})();

/*
[Formato de mensaje]-------------------
*/
const textos: string[] = [];
textos.push("******************************************");
textos.push(`Números: ${numeros}`);
textos.push(`Mínimo: ${minimo}`);
textos.push(`Máximo: ${maximo}`);
textos.push(`Promedio: ${promedio}`);
textos.push("******************************************");

/*
[Salida a consola]-------------------
*/

console.log(textos[0]);
console.log(textos[1]);
console.log(colors.bgWhite(colors.yellow(textos[2])));
console.log(colors.bgWhite(colors.red(textos[3])));
console.log(colors.bgWhite(colors.green(textos[4])));
console.log(textos[5]);

/*
[Escritura del archivo]-------------------
*/
await Deno.writeTextFile("./resultados.dat", textos.join("\n"));