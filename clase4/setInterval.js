let i = 0;
const intervalo1 = setInterval(()=> {
    console.log("Esta cadena se imprime varias veces");
    if (i==5) {
        clearInterval();
    }
    i++;
}, 500);

// console.log("Este es un mensaje exterior");
// clearInterval(intervalo1);