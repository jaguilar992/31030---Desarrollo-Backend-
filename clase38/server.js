const express = require("express");
const cors = require("cors");
const app = express();
const { PORT=8080 } = require("./src/config")

// Routers
const PokemonRouter = require("./src/routes/pokemon");
const TrainerRouter = require("./src/routes/trainer");
const logger = require("./src/logs/logger");
const hbs = require("./src/views/config");

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./src/views/");

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
// Routes
app.use("/pokemon", PokemonRouter);
app.use("/trainer", TrainerRouter);

const server =  app.listen(PORT, () => {
  logger.info(`🌩️ Escuchando peticiones en puerto: ${PORT}`);
});

server.on("error", (err) => {
  logger.err(err);
})

module.exports = app;