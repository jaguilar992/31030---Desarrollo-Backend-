import { Router } from "express";
const TrainerRouter = Router();
import {
  addTrainer,
  getTrainerInfo,
  addPokemon,
} from "../controllers/trainer";

TrainerRouter.post("/", addTrainer);
TrainerRouter.get("/:id", getTrainerInfo);
TrainerRouter.post("/:id/addPokemon", addPokemon);

export default TrainerRouter;
