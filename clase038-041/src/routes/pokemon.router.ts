import { Router } from "express";
import { getAllPokemons } from "../controller/pokemon.controller";
const pokemonRouter = Router();

pokemonRouter.get("/", getAllPokemons)

export default pokemonRouter;