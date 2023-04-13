import {Schema, model} from "mongoose";

export interface PokemonDTO {
  id?: number; // numero del pokemon
  name?: string;
  type?: string;
  image?: string;
}

export const PokemonSchema = new Schema<PokemonDTO>({
  id: {type: Number, required: true, default: 0},
  name: {type: String, required: true, default: ""},
  type: {type: String, required: true, default: ""},
  image: {type: String, required: true, default: ""},
});

export const PokemonModel = model("pokemon", PokemonSchema);

