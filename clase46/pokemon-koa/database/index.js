const mongoose = require("mongoose");


async function connectMongo () {
  try {
    await mongoose.connect("mongodb://localhost:27017/pokemon", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connectMongo };