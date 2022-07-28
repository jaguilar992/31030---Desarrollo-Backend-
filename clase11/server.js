// Servidor con WebSocket
const express = require("express");
const {Server: HTTPServer } = require("http");
const {Server: SocketServer} = require("socket.io");

const messages = [];

const app = express();
const httpServer = new HTTPServer(app);
const socketServer = new SocketServer(httpServer);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

socketServer.on("connection", (socket) => {
  console.log('Nuevo client conectado');
  socketServer.emit("INIT", "Bienvenido al WebSocket", messages);

  socket.on("POST_MESSAGE", (msg)=>{
    const _msg = {...msg, id: socket.id};
    messages.push(_msg);
    console.log(_msg);
    socketServer.sockets.emit("NEW_MESSAGE", _msg);
  });
});


const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});