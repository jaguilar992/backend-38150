import { PokemonDTO } from '../modules/pokemon/pokemon.dto';
import pokemonRepository from '../modules/pokemon/pokemon.repository';
import { pokemonSchema } from '../modules/pokemon/pokemon.validation';

export const getAllPokemons = async (req, res) => {
  const pokemons = await pokemonRepository.find();
  res.json({ data: pokemons })
};


// /api/pokemon/25
export const getPokemonById = async (req, res) => {
  const { id } = req.params;
  const pokemon = await pokemonRepository.findOne(id);
  if (!pokemon) 
    return res.status(404).json({ message: "Pokemon not found", data: null });
  res.json({ data: pokemon });
};


// POST /api/pokemon
export const createPokemon = async (req, res) => {
  const {id, name, type} = req.body;
  const _pokemon: PokemonDTO = {id, name, type};
  // // Validación
  // if (!id || !name || !type) {
  //   return res.status(400).json({ message: "Bad request", data: null });
  // }
  const validation = pokemonSchema.validate(_pokemon);
  console.log(validation);
  if (validation.error) {
    return res.status(400).json({ message: validation.error.details, data: null });
  }
  // Verificar que no exista
  const existe = await pokemonRepository.findOne(id);
  if (existe) {
    return res.status(409).json({ message: "Pokemon already exists", data: null });
  }
  // Crear el pokemon
  _pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const pokemon = await pokemonRepository.save(_pokemon);
  return res.status(201).json({ data: pokemon, message: "Pokemon has been created" });
}

export const deletePokemon = async (req, res) => {
  const { id } = req.params;
  if (!id ) {
    return res.status(400).json({ message: "Bad request", data: null });
  }
  const deleted = await pokemonRepository.delete(id);
  res.json({ message: "Pokemon has been deleted", data: deleted });
}

export const renderPokedex = async (req, res) => {
  const pokemons = await pokemonRepository.find();
  res.render("pokedex", { 
    pokemons,
    title: "Pokedex",
  });
}

export const renderPokemon = async (req, res) => {
  const { id } = req.params;
  const pokemon = await pokemonRepository.findOne(id);
  if (!pokemon) {
    console.log("Pokemon not found");
    return res.status(404).json({ message: "Pokemon not found" });
  }
  res.render("pokemon", { 
    pokemon,
    title: pokemon.name,
  });
}