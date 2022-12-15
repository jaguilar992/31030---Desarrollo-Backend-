const {Schema, model} = require("mongoose");

const PokemonSchema = new Schema({
  id:   {type: Number, required: true},
  name: {type: String, required: true},
  type: {type: String, required: true},
});

const Pokemon = model("Pokemon", PokemonSchema);


module.exports = Pokemon;