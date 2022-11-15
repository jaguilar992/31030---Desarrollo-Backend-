const express = require("express");
const TrainerRouter = express.Router();
const {
  addTrainer,
  getTrainerInfo,
  addPokemon
} = require("../controllers/trainer")

TrainerRouter.post("/", addTrainer);
TrainerRouter.get("/:id", getTrainerInfo);
TrainerRouter.post("/:id/addPokemon", addPokemon);


module.exports = TrainerRouter;