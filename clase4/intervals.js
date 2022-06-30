let cuenta = 0;

const refInterval = setInterval(function (){
    cuenta++;
    console.log(`Hola No ${cuenta}`);
    if (cuenta >= 10) {
        clearInterval(refInterval);
    }
}, 100);

// clearInterval(refInterval);