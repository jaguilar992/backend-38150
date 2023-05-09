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
const Pokemon = use('App/Models/Pokemon')

Route.on('/').render('welcome')
Route.get('/pokemon', 'PokemonController.index')
Route.get('/pokemon/:number', 'PokemonController.findByNumber')
Route.post('/pokemon', 'PokemonController.createPokemon')
Route.delete('/pokemon/:number', 'PokemonController.deletePokemon')

// Ruta sin controlador, embebe una funcion anonima
Route.put('/pokemon/:number', async ({ request , response }) => {
  const number = request.params.number;
  const data = request.body;
  const { name, type } = data;
  const pokemon = await Pokemon.findBy('number', number);
  pokemon.name = name;
  pokemon.type = type;
  pokemon.save();
  return response.json(pokemon);
});