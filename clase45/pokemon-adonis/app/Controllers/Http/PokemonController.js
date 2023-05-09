'use strict'

const Pokemon = use('App/Models/Pokemon')

class PokemonController {
  async index ({ request, response }) {
    const pokemons = await Pokemon.all();
    return response.json(pokemons);
  }

  async findByNumber ({ request, response }) {
    const number = request.params.number;
    const pokemon = await Pokemon.findBy('number', number);
    return response.json(pokemon);
  }

  async createPokemon ({ request, response }) {
    const data = request.body;
    const { name, type, number } = data;
    const pokemon = new Pokemon();
    pokemon.name = name;
    pokemon.type = type;
    pokemon.number = number;
    pokemon.save();
    return response.json(pokemon);
  }

  async deletePokemon ({ request, response }) {
    const number = request.params.number;
    const pokemon = await Pokemon.findBy('number', number);
    await pokemon.delete();
    return response.json({
      message: `Pokemon ${number} deleted!`
    });
  }
}

module.exports = PokemonController
