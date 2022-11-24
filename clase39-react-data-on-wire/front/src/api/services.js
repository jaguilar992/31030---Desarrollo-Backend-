import client from "./index";

export async function getAllPokemons () {
  const {data} = await client.get("/pokemon");
  return data;
}

export async function deletePokemonById(id) {
  const { data } = await client.delete(`/pokemon/${id}`)
  return data;
}

export async function updatePokemon(id, object) {
  const { data } = await client.put(`/pokemon/${id}`, object);
}