const express = require("express");
const PokemonRouter = express.Router();
const {
  getAllPokemons,
  addNewPokemon,
  getPokemonById,
  updatePokemonById,
  deletePokemonById,
  showPokemonView
} = require("../controllers/pokemon");
const { isAuth } = require("../middlewares");


PokemonRouter.get("/", getAllPokemons);
PokemonRouter.post("/", addNewPokemon);
PokemonRouter.put("/:id", updatePokemonById);
PokemonRouter.delete("/:id", deletePokemonById);
PokemonRouter.get("/:id", getPokemonById);
PokemonRouter.get("/view/all", showPokemonView)



module.exports = PokemonRouter;