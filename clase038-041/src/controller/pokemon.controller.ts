import pokemonRepository from '../repository/pokemon.repository';
import { PokemonDTO } from '../schemas/pokemon';

export const getAllPokemons = async (req, res) => {
  const pokemons = await pokemonRepository.getAllPokemons();
  res.json({ data: pokemons })
};


// /api/pokemon/25
export const getPokemonById = async (req, res) => {
  const { id } = req.params;
  const pokemon = await pokemonRepository.getPokemonById(id);
  if (!pokemon) 
    return res.status(404).json({ message: "Pokemon not found", data: null });
  res.json({ data: pokemon });
};


// POST /api/pokemon
export const createPokemon = async (req, res) => {
  const {id, name, type} = req.body;
  // Validación
  if (!id || !name || !type) {
    return res.status(400).json({ message: "Bad request", data: null });
  }
  // Verificar que no exista
  const existe = await pokemonRepository.getPokemonById(id);
  if (existe) {
    return res.status(409).json({ message: "Pokemon already exists", data: null });
  }
  // Crear el pokemon
  const _pokemon: PokemonDTO = {id, name, type};
  const pokemon = await pokemonRepository.createPokemon(_pokemon);
  return res.status(201).json({ data: pokemon, message: "Pokemon has been created" });
}

export const deletePokemon = async (req, res) => {
  const { id } = req.params;
  if (!id ) {
    return res.status(400).json({ message: "Bad request", data: null });
  }
  const deleted = await pokemonRepository.deletePokemon(id);
  res.json({ message: "Pokemon has been deleted", data: deleted });
}