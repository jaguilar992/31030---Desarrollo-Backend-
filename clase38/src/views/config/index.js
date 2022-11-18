const handlebars = require("express-handlebars");

const hbs = handlebars.create({
  extname: ".hbs",
  defaultLayout: "index.hbs",
  layoutsDir: __dirname + "/../",
  partialsDir: __dirname + "/../partials/"
});

module.exports = hbs;