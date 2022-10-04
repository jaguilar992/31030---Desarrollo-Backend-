function calcular() {
  let contador = 0;
  for (i=0; i < 1e9; i++) {
    contador += i;
  }
  return contador;
}

// Message del padre al hijo
process.on("message", (msg) => {
  console.log(msg);
  const suma = calcular();
  process.send(suma); // Del hijo hacia el padre
})