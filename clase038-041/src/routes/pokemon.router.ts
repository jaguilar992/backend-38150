import { Router } from "express";
import {
  createPokemon,
  deletePokemon,
  getAllPokemons,
  getPokemonById,
  renderPokedex,
} from "../controller/pokemon.controller";
import { authMiddleware } from "../middleware/auth.middleware";
const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemons);
pokemonRouter.get("/:id", getPokemonById);
pokemonRouter.post("/", createPokemon);
pokemonRouter.delete("/:id", authMiddleware, deletePokemon);
export default pokemonRouter;
