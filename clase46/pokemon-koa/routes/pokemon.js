const Router = require('koa-router');
const Pokemon = require('../schemas/pokemon');

// const pokemons = [
//   { id: 1, name: 'Bulbasaur', type: 'grass' },
//   { id: 25, name: 'Pikachu', type: 'electric' },
// ]


const pokemonRouter = new Router({
  prefix: '/pokemon'
});

pokemonRouter.get("/", async (ctx) => {
  const pokemons = await Pokemon.find();
  ctx.body = pokemons;

});

pokemonRouter.get("/:id", ctx => {
  const id = parseInt(ctx.params.id);
  const pokemon = pokemons.find(pokemon => pokemon.id === id);
  if (pokemon) {
    ctx.body = pokemon;
  } else {
    ctx.status = 404;
  }
});

// pokemonRouter.post
// pokemonRouter.put
// pokemonRouter.delete

module.exports = pokemonRouter;