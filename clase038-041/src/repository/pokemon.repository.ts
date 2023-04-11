import { PokemonDTO, PokemonModel } from "../schemas/pokemon";

export class PokemonRepository {
  public async getAllPokemons() {
    return await PokemonModel.find();
  }

  public async getPokemonById(id: number) {
    return await PokemonModel.findOne({ id });
  }

  public async createPokemon(pokemon: PokemonDTO) {
    const _pokemon = new PokemonModel(pokemon);
    await _pokemon.save(); // Agrega el _id
    return _pokemon;
  }

  // Update 
  public async updatePokemon(id: number, pokemon: PokemonDTO) {
    const _pokemon = await PokemonModel.findOneAndUpdate({ id }, pokemon);
    return _pokemon;
  }

  // Delete
  public async deletePokemon(id: number) {
    await PokemonModel.deleteOne({ id });
    return true;
  }
}

export default new PokemonRepository();