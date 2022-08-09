// const lista:Array<number> = [1,2,3,4,5];
// lista.map((x:number)=> x+1)
//   .forEach((x:number) => console.log(x))
// const s:string = "Hola Mundo";
// s.concat("Hi");
var generateColor = function () {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
};
var color = generateColor();
console.log(color);
