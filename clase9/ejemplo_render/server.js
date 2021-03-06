const fs = require("fs");
const express = require("express");

const app = express();

app.engine("ntl", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(new Error(err));

    const rendered = content.toString()
      .replace("#title#", ""+options.title+"")
      .replace("#message#", ""+options.message+"");
    return callback(rendered);
  });
});

app.set("views", "./views"); // ruta de almacenamiento de la plantilla
app.set("view engine", "ntl"); // nombre del motor de plantillas

app.get("/", (req, res)=>{
  res.render("index", {title: "Hola", message: "Rendered"});
});

app.listen(8080, () => {
  console.log("Running server on 8080");
})