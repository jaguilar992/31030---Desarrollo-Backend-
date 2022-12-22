import { 
  getPokemons, 
  createPokemon,
  getPokemonById,
  updatePokemonById,
  deletePokemonById
} from "../controller/pokemon.ts";
import { Router } from "../deps.ts";

export const pokemonRouter = new Router({
  prefix: "/pokemon"
})
  .get("/", getPokemons)
  .post("/", createPokemon)
  .get("/:id", getPokemonById)
  .put("/:id", updatePokemonById)
  .delete("/:id", deletePokemonById)
;