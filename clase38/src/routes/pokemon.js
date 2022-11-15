const express = require("express");
const PokemonRouter = express.Router();
const {
  getAllPokemons,
  addNewPokemon,
  getPokemonById,
  updatePokemonById,
  deletePokemonById
} = require("../controllers/pokemon");


PokemonRouter.get("/", getAllPokemons);
PokemonRouter.post("/", addNewPokemon);
PokemonRouter.get("/:id", getPokemonById);
PokemonRouter.put("/:id", updatePokemonById);
PokemonRouter.delete("/:id", deletePokemonById);



module.exports = PokemonRouter;