const Contenedor = require("../database/utils/contenedor-archivo");
const contenedor = new Contenedor(__dirname + "/../database/trainer.json");
const contenedorPokemon = new Contenedor(__dirname + "/../database/pokemon.json");

class TrainerService {
  static save(trainer) {
    return contenedor.save(trainer)
  }

  static getInfo(id) {
    const trainer = contenedor.getById(id);
    const pokemons = trainer.pokemon.map(pokemonId => contenedorPokemon.getById(pokemonId));
    trainer.pokemon = pokemons;
    return trainer;
  }

  static addPokemon(id, pokemonId) {
    const trainer = contenedor.getById(id);
    if (!trainer.pokemon) {
      trainer.pokemon = [pokemonId]
    } else {
      trainer.pokemon.push(pokemonId)
    }
    const _result = contenedor.updateById(id, trainer);
    return _result;
  }
}

module.exports = TrainerService;
