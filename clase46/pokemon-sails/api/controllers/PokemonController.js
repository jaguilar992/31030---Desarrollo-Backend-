/**
 * PokemonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Pokemon = require('../models/Pokemon');

const pokemons = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass',
  }
];

async function getPokemon (req, res) {
  const pokemons = await Pokemon.find();
  return res.send(pokemons);
}

async function createPokemon(req, res) {
  const { name, type, id } = req.body;
  const pokemon = { id, name, type };
  pokemons.push(pokemon);
  return res.send(pokemon);
}

module.exports = {
  getPokemon,
  createPokemon
};

