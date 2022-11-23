import { TrainerDTO } from "../dto/trainer.dto";
import { TrainerFactory } from "../factory/trainer.factory";

class TrainerRepository {
  private trainerDao;
  private pokemonDAO;

  constructor() {
    const trainerFactory = new TrainerFactory();
    this.trainerDao = trainerFactory.getDAO();
  }
  getAll(){};
  getById(id: string){
    const trainer: TrainerDTO = this.trainerDao.getById(id);
    trainer.pokemons?.map ( pokemon => {
      // return this.pokemonDAO.getById(pokemon.id);
    });
  };
  update(){};
  delete(){};
  save(){};
}

const repository = new TrainerRepository();