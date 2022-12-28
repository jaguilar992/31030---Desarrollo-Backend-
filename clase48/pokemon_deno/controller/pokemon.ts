import { helpers } from "../deps.ts";
import { PokemonCollection } from "../database/index.ts";
import { Pokemon } from "../schemas/index.ts";

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

export async function getPokemons(ctx) {
  const _pokemons = await PokemonCollection.find({}).toArray();
  ctx.response.body = _pokemons;
}

export async function createPokemon(ctx) {
  const body = await ctx.request.body().value;
  if (body && body?.name && body?.type && body?.id) {
    // pokemons.push(body);
    const pokemon: Pokemon = {
      id: body.id,
      name: body.name,
      type: body.type
    }
    const resp = await PokemonCollection.insertOne(pokemon);
    ctx.response.status = 201;
    ctx.response.body = {
      ...pokemon,
      _id: resp
    };
    // ctx.response.body = pokemon;
  }
}

export async function getPokemonById(ctx){
  let id = helpers.getQuery(ctx, { mergeParams: true }).id;
  id = parseInt(id);
  const pokemon = await PokemonCollection.findOne({id});
  if (pokemon) {
    ctx.response.body = pokemon;
  } else 
    ctx.response.status = 404;
}

export async function updatePokemonById(ctx){
  let id = helpers.getQuery(ctx, { mergeParams: true }).id;
  id = parseInt(id);
  const body = await ctx.request.body().value;
  if (body && body?.name && body?.type) {
    await PokemonCollection.updateOne({id}, {
      $set: {
        name: body.name,
        type: body.type,
      }
    });
    const pokemon = await PokemonCollection.findOne({id});
    ctx.response.status = 200;
    ctx.response.body = pokemon;
    return ;
  } else 
    ctx.response.body = {
      error: true,
      message: "Invalid body: name, type are required"
    }
}

export function deletePokemonById(ctx){
  let id = helpers.getQuery(ctx, { mergeParams: true }).id;
  id = parseInt(id);
  PokemonCollection.deleteOne({id});    
  ctx.response.status = 200;
  ctx.response.body = {
    message: "Pokemon deleted"
  };
  return ;
}