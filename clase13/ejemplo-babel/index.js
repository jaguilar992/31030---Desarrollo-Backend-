const generateColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// #FFFFFF
// rgb(255, 255, 255)

let color = generateColor();
console.log(color);