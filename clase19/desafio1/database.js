const mongoose = require("mongoose");

// Hacer la conexion con la base de datos
async function connection() {
  // mongodb://<user>:<password>@localhost:port/db
  const URIString = "mongodb://localhost:27017/colegio"
  await mongoose.connect(URIString);
}

module.exports = connection;