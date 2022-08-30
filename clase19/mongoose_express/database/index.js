const mongoose = require("mongoose");

async function connection() {
  // mongodb://user:password@host:port/db
  const URIString = "mongodb://localhost:27017/plataforma";
  await mongoose.connect(URIString);
}

module.exports = connection;