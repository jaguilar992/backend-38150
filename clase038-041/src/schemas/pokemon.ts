import {Schema, model} from "mongoose";

export interface PokemonDTO {
  id?: number;
  name?: string;
  type?: string;
}

export const PokemonSchema = new Schema<PokemonDTO>({
  id: {type: Number, required: true, default: 0},
  name: {type: String, required: true, default: ""},
  type: {type: String, required: true, default: ""},
});

export const PokemonModel = model("pokemon", PokemonSchema);

