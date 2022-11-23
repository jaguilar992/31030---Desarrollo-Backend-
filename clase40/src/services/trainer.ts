import { PokemonRepository } from "../modules/pokemon/pokemon.repository";
import { TrainerDTO } from "../modules/trainer/trainer.dto";
import { TrainerRepository } from "../modules/trainer/trainer.repository";

export default class TrainerService {
  static repo: TrainerRepository;
  static pokemonRepo: PokemonRepository;
  
  static initTrainerRepo () {
    if (!TrainerService.repo) {
      TrainerService.repo = new TrainerRepository();
    }
    if (!TrainerService.pokemonRepo) {
      TrainerService.pokemonRepo = new PokemonRepository();
    }
  }

  static async save(trainer: TrainerDTO) {
    TrainerService.initTrainerRepo();
    return TrainerService.repo.save(trainer);
  }

  static async getInfo(id: string) {
    TrainerService.initTrainerRepo();
    const trainer = await TrainerService.repo.getById(id);
    return trainer;
  }

  static async addPokemon(id: string, pokemonId: number) {
    TrainerService.initTrainerRepo()
    return TrainerService.repo.addPokemon(id, pokemonId);
  }
}
