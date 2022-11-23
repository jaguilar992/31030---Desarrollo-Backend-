import { Router } from "express";
const PokemonRouter = Router();
import { isAuth } from "../middlewares/"

import  {
  getAllPokemons,
  addNewPokemon,
  getPokemonById,
  updatePokemonById,
  deletePokemonById,
  showPokemonView
} from "../controllers/pokemon";

PokemonRouter.get("/", getAllPokemons);
PokemonRouter.post("/", addNewPokemon);
PokemonRouter.put("/:id", updatePokemonById);
PokemonRouter.delete("/:id", deletePokemonById);
PokemonRouter.get("/:id", getPokemonById);
PokemonRouter.get("/view/all", showPokemonView)



export default PokemonRouter;