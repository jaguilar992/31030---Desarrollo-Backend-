import { helpers } from "../deps.ts";

const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass"
  }, {
    id: 25,
    name: "Pikachu",
    type: "Electric"
  }, {
    id: 3,
    name: "Pikachu",
    type: "Electric"
  }
];

export function getPokemons(ctx) {
  ctx.response.body = pokemons;
}

export async function createPokemon(ctx) {
  const body = await ctx.request.body().value;
  if (body && body?.name && body?.type && body?.id) {
    pokemons.push(body);
    ctx.response.status = 201;
    ctx.response.body = body;
  }
}

export function getPokemonById(ctx){
  let id = helpers.getQuery(ctx, { mergeParams: true }).id;
  id = parseInt(id);
  console.log(id);
  const pokemon = pokemons.find(p => p.id === id);
  if (pokemon) {
    ctx.response.body = pokemon;
  } else 
    ctx.response.status = 404;
}

export async function updatePokemonById(ctx){
  let id = helpers.getQuery(ctx, { mergeParams: true }).id;
  id = parseInt(id);
  const body = await ctx.request.body().value;
  if (body && body?.name && body?.type && body?.id) {
    const pokemon = pokemons.find(p => p.id === id);
    if (pokemon) {
      pokemon.name = body.name;
      pokemon.type = body.type;
      pokemon.id = body.id;
    }
    ctx.response.status = 201;
    ctx.response.body = body;
    return ;
  }
  ctx.response.status = 404;
}

export function deletePokemonById(ctx){
  let id = helpers.getQuery(ctx, { mergeParams: true }).id;
  id = parseInt(id);
  const pokemon = pokemons.find(p => p.id === id);
  if (pokemon) {
    pokemons.splice(pokemons.indexOf(pokemon), 1);
    ctx.response.status = 204;
    // ctx.response.body = {
    //   message: "Pokemon deleted"
    // };
    return ;
  }
  ctx.response.status = 404;
}