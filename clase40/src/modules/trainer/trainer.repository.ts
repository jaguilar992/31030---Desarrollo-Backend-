import { DAOInterface } from "../dao.interface";
import { PokemonDTO } from "../pokemon/pokemon.dto";
import { TrainerDTO } from "./trainer.dto";
import { TrainerDAOFactory } from "./trainer.factory";
import { PokemonDAOFactory } from "../pokemon/pokemon.factory";

export class TrainerRepository implements DAOInterface<TrainerDTO, string>{
  private trainerDao: DAOInterface<TrainerDTO, string>;
  private pokemonDAO: DAOInterface<PokemonDTO, number>;

  constructor() {
    const trainerFactory = new TrainerDAOFactory();
    const pokemonFactory = new PokemonDAOFactory();
    this.trainerDao = trainerFactory.getDAO();
    this.pokemonDAO = pokemonFactory.getDAO();
  }

  async getAll(): Promise<TrainerDTO[]>{
    return await this.trainerDao.getAll()
  };
  
  async getById(id: string): Promise<any>{
    const trainer: any = await this.trainerDao.getById(id);
    const _r = await trainer.pokemons.map(async (pId) => {
      const pokemon = await this.pokemonDAO.getById(pId);
      return pokemon;
    })
    const pokemons = await Promise.all(_r);
    return {
      ...trainer,
      pokemons
    };
  };
  
  async save(object: TrainerDTO): Promise<TrainerDTO> {
    return await this.trainerDao.save(object);
  }

  async delete(id: string): Promise<boolean> {
    return await this.trainerDao.delete(id);
  }

  async update(id: string, object: TrainerDTO): Promise<TrainerDTO> {
    return await this.trainerDao.update(id, object);
  }

  async addPokemon(id: string, pokemonId: number) {
    return await this.trainerDao.addPokemon(id, pokemonId);
  }
}