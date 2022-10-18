const express = require("express");

const app = express()

const PORT = parseInt(process.argv[2]) || 8081;

// app.use(express.static("./static"));

app.get("/datos", (req, res) => {
  console.log(`PORT: ${PORT}} -> Date: ${Date.now()}`)
  res.send(`Servidor express nginx en ${PORT} - PID: ${process.pid} - Date: ${(new Date).toLocaleString()}`);
});


app.listen(PORT, (err) => {
  if (!err) console.log(`Servidor iniciado en PORT: ${PORT} - PID: ${process.pid} }`);
})