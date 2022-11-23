import { model, Schema, Types } from "mongoose";
import { MongoConnection } from "../database";
import { TrainerDTO } from "../dto/trainer.dto";

export interface DAOInterface {
  getAll();
  getById(id: string);
  save(object: TrainerDTO);
  update(id: string, object: TrainerDTO);
  delete(id: string);
}

export class TrainerDAOMongoImpl implements  DAOInterface{
  private trainerModel;
  constructor () {
    MongoConnection.connect();
    const TrainerSchema = new Schema<TrainerDTO>({
      name: {type: 'String'},
      age: {type: 'Number'},
      city: {type: 'String'},
      pokemons: {type: 'Array', default: []}
    });

    const TrainerModel = model('Trainer', TrainerSchema);

    this.trainerModel = TrainerModel;
  }
  async getAll() {
    return await this.trainerModel.find({});
  }

  async getById(id: string) {
    const _id = new Types.ObjectId(id);
    return await this.trainerModel.findOne({ _id });
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
}
