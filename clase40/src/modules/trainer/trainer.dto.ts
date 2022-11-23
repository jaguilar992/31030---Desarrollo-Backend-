import { PokemonDTO } from "../pokemon/pokemon.dto";

export interface TrainerDTO {
  name: string;
  age: number;
  city: string;
  id?: string;
  pokemons?: any;
}

// const trainer: TrainerDTO = {
//   name: 'Antonio',
//   age: 30,
//   city: 'Tegucigalpa'
// }

// const pikachu: PokemonDTO = {
//   name: 'Pikachu',
//   id: 25,
//   tipo: 'Electrico'
// }

// // trainer.pokemons?.push(pikachu);
