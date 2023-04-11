import { PokemonDTO, PokemonModel } from "../schemas/pokemon";

export const getAllPokemons = async (req, res) => {
  const pokemons = await PokemonModel.find();
  res.json({ data: pokemons })
};