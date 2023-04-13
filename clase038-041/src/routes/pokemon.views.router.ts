import { Router } from "express";
import {
  createPokemon,
  deletePokemon,
  getAllPokemons,
  getPokemonById,
  renderPokedex,
} from "../controller/pokemon.controller";
const pokemonViewsRouter = Router();

pokemonViewsRouter.get("/view", renderPokedex);

export default pokemonViewsRouter;