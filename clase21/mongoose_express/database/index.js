const mongoose = require("mongoose");

async function connection() {
  // mongodb://user:password@host:port/db
  const URIString = "mongodb://localhost:27017/plataforma";
  // const URIString = "mongodb+srv://antonio:password1234@cluster0.jw4srfl.mongodb.net/plataforma?retryWrites=true&w=majority";
  connection = await mongoose.connect(URIString);
  return connection;
}

module.exports = connection;