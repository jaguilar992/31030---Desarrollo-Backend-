const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const personRoutes = require('./routes/person');
const {Server : SocketServer} = require('socket.io');
const {Server: HTTPServer} = require('http');

const httpServer = new HTTPServer(app);
const socketServer = new SocketServer(httpServer);

const Contenedor = require('./utils/contenedor');
const c = new Contenedor("./db.json");

app.use(express.static('public'));
app.use("/person", personRoutes);

socketServer.on('connection', (socket) => {
  console.log("nuevo cliente");
  socket.emit('personas_registradas', c.getAll());

  socket.on('personas_nueva', (persona) => {
    c.save(persona);
    socketServer.emit('personas_registradas', c.getAll());
  });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = 3000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

