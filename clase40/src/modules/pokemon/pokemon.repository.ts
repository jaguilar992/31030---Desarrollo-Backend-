import { DAOInterface } from "../dao.interface";
import { PokemonDTO } from "../pokemon/pokemon.dto";
import { PokemonDAOFactory } from "../pokemon/pokemon.factory";

export class PokemonRepository implements DAOInterface<PokemonDTO, number>{
  private pokemonDAO: DAOInterface<PokemonDTO, number>;

  constructor() {
    const pokemonFactory = new PokemonDAOFactory();
    this.pokemonDAO = pokemonFactory.getDAO();
  }

  async getAll(): Promise<PokemonDTO[]>{
    return await this.pokemonDAO.getAll()
  };
  
  async getById(id: number): Promise<PokemonDTO>{
    return await this.pokemonDAO.getById(id);
  };
  
  async save(object: PokemonDTO): Promise<PokemonDTO> {
    return this.pokemonDAO.save(object);
  }

  async delete(id: number): Promise<boolean> {
    return this.pokemonDAO.delete(id);
  }

  async update(id: number, object: PokemonDTO): Promise<PokemonDTO> {
    return this.pokemonDAO.update(id, object);
  }
}