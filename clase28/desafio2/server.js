const http = require('http');
const {fork} = require('child_process');

let visitas = 0;
const server = http.createServer();

function calcular() {
  let contador = 0;
  for (i=0; i < 2e9; i++) {
    contador += i;
  }
  return contador;
}

server.on("request", (req, res) => {
  visitas++;
  let {url} = req;
  switch(url) {
    case "/":
      res.end("visitas: " + visitas)
      break;
    case "/calculo-bloq":
      const suma = calcular();
      res.end("suma: " + suma);
      break;
    case "/calculo-no-bloq":
      const child = fork("./child.js");
      child.send("start");
      child.on("message", (msg) => {
        res.end("suma: " + msg);
      })
      break;
    default:
      res.end("404");
      break;
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});