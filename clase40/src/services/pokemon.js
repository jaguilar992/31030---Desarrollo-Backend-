const Contenedor = require("../database/utils/contenedor-archivo");
const contenedor = new Contenedor("src/database/pokemon.json");

function parseId(id) {
  if (id < 10) {
    return `00${id}`;
  } else if (id < 100) {
    return `0${id}`;
  } else if (id < 1000) return id;
  else return "";
}

class PokemonService {
  static save(pokemon) {
    const completeId = parseId(pokemon.id);
    const imageURL = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${completeId}.png`;
    pokemon.imagen = imageURL;
    contenedor.save(pokemon);
    return pokemon;
  }

  static readAll() {
    return contenedor.getAll();
  }

  static getById(id) {
    return contenedor.getById(id);
  }

  static updateById(id, pokemon) {
    return contenedor.updateById(id, pokemon);
  }

  static deleteById(id) {
    return contenedor.deleteById(id);
  }
}

module.exports = PokemonService;
