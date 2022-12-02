import { MongoConnection } from "./src/database";

import express from "express"
const app = express();

import cors from "cors";
import { PORT } from "./src/config"
MongoConnection.connect();

// Routers
import PokemonRouter from "./src/routes/pokemon";
import TrainerRouter from "./src/routes/trainer";
import logger from "./src/logs/logger";
import {hbs} from "./src/views/config";

import swaggerUi from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";
import {SwaggerOptions} from "./src/swagger.config";

const specs = swaggerDoc(SwaggerOptions);


app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

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
});

export default app;