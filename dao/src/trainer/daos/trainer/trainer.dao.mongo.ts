import { TrainerDTO, TrainerModel } from "../../trainer.dto";
import { Schema, model, Types } from "mongoose";
import { MongoConnection } from "../../../database";
import { DAO } from "../dao.interface";

export class TrainerDAOMongo implements DAO<TrainerDTO, string> {
  private TrainerModel;
  constructor() {
    MongoConnection.connect();
    this.TrainerModel = TrainerModel;
  }

  async getAll(): Promise<TrainerDTO[]> {
    const users = await this.TrainerModel.find({});
    return users;
  }
  
  async getById(id: string): Promise<TrainerDTO | null> {
    return await this.TrainerModel.findOne({ _id: new Types.ObjectId(id) })
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.TrainerModel.deleteOne({ _id: new Types.ObjectId(id) })
      return true;
    } catch (err) {
      return false;
    }
  }

  async save(object: TrainerDTO): Promise<TrainerDTO> {
    const trainer = new this.TrainerModel(object);
    return await trainer.save();
  }

  async update(id: string, object: TrainerDTO): Promise<TrainerDTO> {
    await this.TrainerModel.updateOne({_id: new Types.ObjectId(id)}, object);
    return object;
  }
}