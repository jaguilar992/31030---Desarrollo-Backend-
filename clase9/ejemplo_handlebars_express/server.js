const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const hbs = handlebars.create({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layout",
    partialsDir: __dirname + "/views/partials/"
});

app.use(express.static("public"));

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");


fakeApi = () => [
    {name: "Katarina", lane: "midlaner"},
    {name: "Jayce", lane: "toplaner"},
    {name: "Herbert", lane: "toplaner"},
    {name: "Alan", lane: "midlaner"},
    {name: "Bob", lane: "midlaner"},
]

app.get("/", (req, res) => {
    res.render("main", {
        suggestedChamps: fakeApi(),
        listExists: true
    });
});

app.get("/user", (req, res) => {
    res.render("user", {nombre: "Antonio", apellido: "Aguilar"})
})

const PORT = 8080;
app.listen(PORT, ()=> {
    console.log(`Running on PORT: ${PORT}`);
})