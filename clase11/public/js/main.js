// Cliente WebSocket
const socket = io();

socket.on("connect", () => {
  console.log("Conectado al servidor");
});

socket.on("INIT", (msg, allMessages) => {
  // alert(msg);
  document.getElementById("posts").innerHTML = "";
  for (let msg of allMessages) {
    appendMessage(msg);
  }
});

socket.on("NEW_MESSAGE", (msg) => {
  appendMessage(msg);
})

function appendMessage(msg) {
  document.getElementById("posts").innerHTML += `
    <div class="post ui card">
      <div class="div ui container">
      <b>${msg.nombre} (${msg.id}):</b> ${msg.mensaje}
      </div>
    </div>
  `;
}

function enviarMensaje(){
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;

  socket.emit("POST_MESSAGE", {nombre, mensaje})
}