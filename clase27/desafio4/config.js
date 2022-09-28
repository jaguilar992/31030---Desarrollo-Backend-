const dotenv = require("dotenv");

dotenv.config({
  path: 
    process.env.MODO === "prod" 
      ? __dirname + "/.env"
      : __dirname + "/dev.env"
});


const config = {
  modo: process.env.MODO,
  puerto: process.env.PUERTO,
  debug: process.env.DEBUG
}

module.exports = config;