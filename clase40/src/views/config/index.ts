import * as handlebars from "express-handlebars";

export const hbs = handlebars.create({
  extname: ".hbs",
  defaultLayout: "index.hbs",
  layoutsDir: __dirname + "/../",
  partialsDir: __dirname + "/../partials/"
});
