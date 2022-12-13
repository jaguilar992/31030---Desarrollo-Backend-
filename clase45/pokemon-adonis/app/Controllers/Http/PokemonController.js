'use strict'

class PokemonController {
  async index({ view }) {
    const Pokemon = use('App/Models/Pokemon');
    const pokemons = await Pokemon.all();
    return await view.render('pokemons', { pokemons: pokemons.rows });
  }
}

module.exports = PokemonController
