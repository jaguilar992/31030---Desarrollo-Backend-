const http = require("http");
const cluster = require("cluster");
const args = process.argv.slice(2);
const port = args.length > 0 ? args[0] : 8080;

if (cluster.isMaster) {
  const numCPUs = require("os").cpus().length;
  console.log("numCPUs", numCPUs);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", () => {
    console.log(`Worker died ${process.pid}`);
    cluster.fork();
  })
} else {
  const server = http.createServer();
  
  server.on("request", (req, res) => {
    const pid = process.pid;
    const fecha = new Date(Date.now());
    
    res.end(`PID: ${pid}}. Fecha: ${fecha}. PORT: ${port}`);
  });
  
  server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}. PID: ${process.pid}`);
  });

}