function randomInt(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const object = {};

for(let i = 0; i < 10000; i++) {
    let n = randomInt(1,20);
    if (!object.hasOwnProperty(n)) {
        object[n] = 1;
    } else {
        object[n]++;
    }
}

console.log(object);