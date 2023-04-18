import { Repository } from "../repository";
import { PokemonDTO } from "./pokemon.dto";

import pokemonFactory from "./pokemon.factory";

export class PokemonRepository implements Repository {
  private pokemonDAO;
  
  constructor () {
    this.pokemonDAO = pokemonFactory.getDAO();
  }
  
  async find(): Promise<PokemonDTO[]>{
    const pokemons = await this.pokemonDAO.getAllPokemons();  
    return pokemons;
  }

  async findOne(id: number): Promise<PokemonDTO> {
    const pokemon = await this.pokemonDAO.getPokemonById(id);
    return pokemon;
  }

  async save(pokemon: PokemonDTO): Promise<PokemonDTO> {
    await this.pokemonDAO.createPokemon(pokemon);
    return pokemon; 
  }
  async update(id: number, pokemon: PokemonDTO): Promise<PokemonDTO>{
    const _pokemon = await this.pokemonDAO.updatePokemon(id, pokemon);
    return _pokemon;
  }

  async delete(id: number): Promise<boolean> {
    await this.pokemonDAO.deletePokemon(id);
    return true;
  }
}

export default new PokemonRepository();