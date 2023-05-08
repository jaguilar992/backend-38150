import {Router} from "express";
import {
  getPokemon,
  getPokemons,
  addPokemon,
  updatePokemon,
  deletePokemon,
} from "../controllers/pokemon.controller";

import { pokemonSchema } from "./pokemon.schema";

const pokemonGraphqlRouter = Router();

import { graphqlHTTP } from "express-graphql";

pokemonGraphqlRouter.use("/", graphqlHTTP({
  schema: pokemonSchema,
  rootValue: {
    getPokemon,
    getPokemons,
    addPokemon,
    updatePokemon,
    deletePokemon,
  },
  graphiql: true,
}));

export { pokemonGraphqlRouter };