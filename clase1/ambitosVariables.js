// # 1
let i = 0;

function foo () {
    i = 1;
    let j = 2;
    if (true) {
        console.log(i);
        console.log(j);
    }
}

foo();
console.log(j);

// #2 Esto es un comentario
/* function foo () {
    let i = 0;
    if (true) {
        let i = 1;
        console.log(i);
    }
    console.log(i);
}

foo();

let myVariable; */