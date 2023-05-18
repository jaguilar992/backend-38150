import {
  getPokemons,
  getPokemonById,
  deletePokemonById,
  updatePokemonById,
  createPokemon
} from "../controller/pokemon.ts";
import { oak } from "../deps.ts";

const pokemonRouter = new oak.Router({
  prefix: "/pokemon",
});

pokemonRouter.get("/", getPokemons);
pokemonRouter.post("/", createPokemon);
pokemonRouter.get("/:id", getPokemonById);
pokemonRouter.put("/:id", updatePokemonById);
pokemonRouter.delete("/:id", deletePokemonById);

export default pokemonRouter;