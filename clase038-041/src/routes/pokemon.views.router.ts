import { Router } from "express";
import {
  createPokemon,
  deletePokemon,
  getAllPokemons,
  getPokemonById,
  renderPokedex,
} from "../controller/pokemon.controller";
const pokemonViewsRouter = Router();

pokemonViewsRouter.get("/", renderPokedex);

export default pokemonViewsRouter;