import { PokemonDTO } from "../modules/pokemon/pokemon.dto";
import { PokemonRepository } from "../modules/pokemon/pokemon.repository";

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

export default class PokemonService {
  static repo: PokemonRepository;

  static initRepo () {
    PokemonService.repo = new PokemonRepository();
  }
  static async save(pokemon: PokemonDTO) {
    const completeId = parseId(pokemon.id);
    const imageURL = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${completeId}.png`;
    pokemon.image = imageURL;
    
    PokemonService.initRepo()
    return await PokemonService.repo.save(pokemon)
  }

  static async readAll() {
    PokemonService.initRepo()
    return await PokemonService.repo.getAll();
  }

  static async getById(id: number) {
    PokemonService.initRepo();
    return PokemonService.repo.getById(id);
  }

  static async updateById(id: number, pokemon: PokemonDTO) {
    PokemonService.initRepo();
    return PokemonService.repo.update(id, pokemon);
  }

  static async deleteById(id: number) {
    PokemonService.initRepo();
    return PokemonService.repo.delete(id);
  }
}
