function mostrarLetras(cadena, time, cb) {
    let i = 0;
    const imprimir = setInterval(
        ()=>{
            if (cadena[i] != undefined) {
                console.log(cadena[i])
            } else {
                cb();
                clearInterval(imprimir);
            }
            i++;
        }, 
        time
    );
}

const fin = () => console.log("Terminé");

mostrarLetras("Hola", 0, fin);
mostrarLetras("Adios", 250, fin);
mostrarLetras("Buenas", 500, fin);