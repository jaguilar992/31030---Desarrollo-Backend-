import { model, Schema, Types } from "mongoose";
import { MongoConnection } from "../../database";
import { DAOInterface } from "../dao.interface";
import { TrainerDTO } from "../trainer/trainer.dto";
import { PokemonDTO } from "./pokemon.dto";

const PokemonSchema = new Schema<PokemonDTO>({
  id: { type: 'Number' },
  name: {type: 'String'},
  type: {type: 'String'},
  HP: {type: 'Number', default: 10},
  image: {type: 'String', default: ''}
});
const PokemonModel = model('Pokemon', PokemonSchema);

export class PokemonDAOMongoImpl implements DAOInterface<PokemonDTO, number>{
  private pokemonModel;
  constructor () {
    MongoConnection.connect();
    this.pokemonModel = PokemonModel;
  }

  async save(pokemon: PokemonDTO) {
    const _pokemon = new this.pokemonModel(pokemon);
    _pokemon.save();
    return _pokemon;    
  }

  async getById(id: number) {
    const pokemon = await this.pokemonModel.findOne({ id: id });
    return pokemon;
  }

  async getAll() {
    return await this.pokemonModel.find({});
  }

  async delete(id: number) {
    await this.pokemonModel.deleteOne({ id });
    return true;
  }

  async update(id: number, pokemon: PokemonDTO) {
    await this.pokemonModel.updateOne({ id }, pokemon);
    return pokemon;
  }
}