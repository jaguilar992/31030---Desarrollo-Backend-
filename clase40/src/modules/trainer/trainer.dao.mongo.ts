import { model, Schema, Types } from "mongoose";
import { MongoConnection } from "../../database";
import { DAOInterface } from "../dao.interface";
import { TrainerDTO } from "./trainer.dto";

const TrainerSchema = new Schema<TrainerDTO>({
  name: {type: 'String'},
  age: {type: 'Number'},
  city: {type: 'String'},
  pokemons: [Number]
});

const TrainerModel = model('Trainer', TrainerSchema);

export class TrainerDAOMongoImpl implements  DAOInterface<TrainerDTO, string>{
  private trainerModel;
  constructor () {
    MongoConnection.connect();
    this.trainerModel = TrainerModel;
  }
  async getAll() {
    return await this.trainerModel.find({});
  }

  async getById(id: string) {
    const _id = new Types.ObjectId(id);
    const trainer = await this.trainerModel.findOne({ _id });
    return {...trainer["_doc"]};
  }

  async save(trainer: TrainerDTO) {
    const _trainer = new this.trainerModel(trainer);
    _trainer.save();
    return _trainer;
  }

  async update(id: string, trainer: TrainerDTO) {
    const _id = new Types.ObjectId(id);
    await this.trainerModel.updateOne({_id}, trainer);
    return trainer;
  }

  async delete(id: string) {
    const _id = new Types.ObjectId(id);
    await this.trainerModel.deleteOne({_id});
    return true;
  }

  async addPokemon(id: string, pokemonId: number) {
    const _id = new Types.ObjectId(id);
    // Validar que exista el registro antes de actualizarlo
    return await this.trainerModel.updateOne({ _id }, {$push: {pokemons: pokemonId}});
  }
}
