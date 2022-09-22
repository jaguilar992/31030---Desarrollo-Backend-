const handlebars = require("express-handlebars");
const hbs = handlebars.create({
  extname: ".hbs",
  defaultLayout: "index.hbs",
  layoutsDir: __dirname + "/views/",
  partialsDir: __dirname + "/views/partials/"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views/pages");