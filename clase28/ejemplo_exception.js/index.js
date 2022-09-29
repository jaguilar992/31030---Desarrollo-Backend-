process.on("beforeExit", () => {
  console.log("Esto solo se ve antes de terminar el programa");
})

process.on("exit", (code) => {
  console.log("Terminando el programa con codigo " + code);
});

// process.on("uncaughtException", function(err) {
//   console.log("Capturada excepción: " + err);
// });


setTimeout(function() {
  console.log("Esto se ejecutará");
}, 1000);

// Intencionalmente generamos un error
// nonexistentFunc(); 
console.log("Esto no se ejecutará");

console.log(process.execPath);