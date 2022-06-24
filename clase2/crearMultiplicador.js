function crearMultiplicador (a) {
    return function (b) {
        return a * b;
    }
}
console.log(crearMultiplicador(5)(4))
// function duplicar 
// function triplicar