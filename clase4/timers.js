// const delay = ret => {for(let i = 0; i < ret*3e6; i++);}

// function hacerTarea(num) {
//     console.log("Haciendo tarea " + num);
//     delay(100);
// }

// console.log("Inicio de tareas");
// hacerTarea(1);
// hacerTarea(2);
// hacerTarea(3);
// hacerTarea(4);
// console.log("Fin de tareas");

// //Timeouts

function hacerTareaTimeout(num, cb) {
    console.log("Haciendo tarea " + num);
    setTimeout(cb, 100);
}

console.log("Inicio de tareas");
hacerTareaTimeout(1, () => {
    hacerTareaTimeout(2, () => {
        hacerTareaTimeout(3, () => {
            hacerTareaTimeout(4, () => {
                console.log("Fin de Tareas")
            })
        })
    })
})
console.log("Otras de tareas");