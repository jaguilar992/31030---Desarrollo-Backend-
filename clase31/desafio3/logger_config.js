const winston = require("winston");

const loggerDev = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({level: "info"})
  ]
});

const loggerProd = winston.createLogger({
  level: "debug",
  transports: [
    new winston.transports.File({filename: "debug.log", level: "debug"}),
    new winston.transports.File({filename: "error.log", level: "error"})
  ]
});

module.exports = {
  loggerDev,
  loggerProd
}