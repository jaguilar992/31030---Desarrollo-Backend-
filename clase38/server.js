const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Routers
const PokemonRouter = require("./src/routes/pokemon");
const TrainerRouter = require("./src/routes/trainer");
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Routes
app.use("/pokemon", PokemonRouter);
app.use("/trainer", TrainerRouter);

const server =  app.listen(PORT, () => {
  console.log(`🌩️ Escuchando peticiones en puerto: ${PORT}`);
});

server.on("error", (err) => {
  console.log(err);
})

module.exports = app;