Promise.resolve(20)
    .then( x => x + 1) // 21
    .then(x2 => x2 * 2) // 42
    .then(x3=> {
        if (x3==22) throw `Error`
        else return 80; // 80
    })
    .then(x4 => 30) // 30
    .then(x5 => x5 / 2) // 15
    .then(console.log) // Imprimir 15
    .catch(console.log)
;

console.log("Este es un valor despues de la promesa 1")

Promise.resolve(10)
    .then( x => x + 1) // 11
    .then(x2 => x2 * 2) // 22
    .then(x3 => {
        if (x3==22) throw `Error` // Lanzar error
        else return 80; 
    })
    .then(x4 => 30) 
    .then(x5 => x5 / 2)
    .then(console.log) 
    .catch(console.log)
;

Promise.resolve(30)
    .then( x => x + 1) // 31
    .then(x2 => x2 * 2) // 62
    .then(x3 => {
        if (x3==22) throw `Error`
        else return 80; // 80
    })
    .then(x4 => 30) // 30
    .then(x5 => x5 / 2) // 15
    .then(console.log) // Imprime 15
    .catch(console.log)
;

// Promise.resolve()
//     .then( x => x + 1) // 31
//     .then(x2 => x2 * 2) // 62
//     .then(x3 => { // NaN
//         if (x3 == 22) throw `Error`
//         else return 80; // 80
//     })
//     .then(x4 => 30) // 30
//     .then(x5 => x5 / 2) // 15
//     .then(console.log) // Imprime 15
//     .catch(console.log)
// ;