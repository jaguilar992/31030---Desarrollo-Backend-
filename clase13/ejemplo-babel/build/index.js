"use strict";

var generateColor = function generateColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
}; // #FFFFFF
// rgb(255, 255, 255)


var color = generateColor();
console.log(color);
