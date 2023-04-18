import { PokemonDTO } from "../pokemon/pokemon.dto";

export interface TrainerDTO {
  dni: number;
  name: string;
  city: string;
  pokemons?: PokemonDTO[];
  age?: number;
}