'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome');
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.get('/pokemon', 'PokemonController.index');

Route.get('/pokemon/:id', async ({view, request}) => {
  const Pokemon = use('App/Models/Pokemon');
  const pokemon = await Pokemon.find(request.params.id);
  console.log(pokemon.name);
  return await view.render('pokemon', { pokemon: pokemon });
});

Route.get("/sin-controller", async ({view, request}) => {
  const palabra = request.qs.palabra;
  const palabraInvertida = palabra.split("").reverse().join("");
  return await view.render("desafio1", { 
    palabra: palabra,
    palabraInvertida: palabraInvertida
  });
});

Route.get("/con-controller", "ControladorController.index");

