import { MongoClient } from "../deps.ts";
import { Pokemon } from "../schemas/index.ts";

const client = new MongoClient();
// Connecting to a Local Database
try {
  await client.connect("mongodb://127.0.0.1:27017");
} catch (e) {
  console.error(e);
}

export default client;
export const database = client.database("pokemon");

// Collections
export const PokemonCollection = database.collection<Pokemon>("pokemons");