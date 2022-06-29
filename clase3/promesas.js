function dividir (dividendo, divisor) {
    return new Promise((resolve, reject)=>{
        // Instrucciones
        if (divisor == 0) {
            reject("No se puede dividir por cero")
        } else {
            resolve(dividendo/divisor)
        }
    });
}

dividir(12, 0)
.then((resultado)=>{
    console.log(`La division es ${resultado}`)
}).catch( (error) => {
    console.log(`Error ${error}`)
});

// dividir(12, 0);