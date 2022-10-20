const log4js = require("log4js");

log4js.configure({
  appenders: {
    console: {type: "console"},
    archivoDebug: {type: "file", filename: "debug.log"},
    archivoError: {type: "file", filename: "error.log"},
  },
  categories: {
    default: {appenders: ["console"], level: "info"},
    productionLogger: {appenders: ["archivoDebug", "archivoError"], level: "debug"},
    debug: {appenders: ["archivoDebug"], level: "debug"},
    error: {appenders: ["archivoError"], level: "error"}
  }
})