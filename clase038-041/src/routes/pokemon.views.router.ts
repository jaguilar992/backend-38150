import { Router } from "express";
import {
  renderPokedex,
  renderPokemon
} from "../controller/pokemon.controller";
const pokemonViewsRouter = Router();

pokemonViewsRouter.get("/", renderPokedex);
pokemonViewsRouter.get("/:id", renderPokemon);

export default pokemonViewsRouter;