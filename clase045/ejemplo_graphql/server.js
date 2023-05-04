import express  from "express";
import cors from "cors";
import crypto from "crypto";

import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Pokemon {
    id: ID!
    name: String
    type: String
    number: Int
  }

  input PokemonInput {
    name: String
    type: String
    number: Int
  }

  type Query {
    getPokemon(id: ID!): Pokemon
    getPokemons(campo: String, valor: String): [Pokemon]
  }

  type Mutation {
    addPokemon(data: PokemonInput): Pokemon
    updatePokemon(id: ID!, data: PokemonInput): Pokemon
    deletePokemon(id: ID!): Pokemon
  }
`);

class Pokemon {
  constructor(id, {name, type, number}) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.number = number;
  }
}

// Objeto para almacenar los pokemons
// Diccionario de pokemons
/**
 * {'jdkjbkds': {name: 'Pikachu', type: 'Electrico', number: 25}}
 */

const pokemons = [
  {name: 'Pikachu', type: 'Electrico', number: 25},
  {name: 'Charmander', type: 'Fuego', number: 4},
  {name: 'Squirtle', type: 'Agua', number: 7},
  {name: 'Bulbasaur', type: 'Planta', number: 1},
  {name: 'Charizard', type: 'Fuego', number: 6},
]
const pokemonsDB = {}; 

// Prepopulando la base de datos
pokemons.forEach((pokemon, index) => {
  const id = crypto.randomBytes(10).toString("hex");
  pokemonsDB[id] = new Pokemon(id, pokemon);
});

// Resolutions para los querys
function getPokemon({id}) {
  if (!pokemonsDB[id]) {
    throw new Error(`No existe un pokemon con el id ${id}`);
  }
  return new Pokemon(id, pokemonsDB[id]);
}

function getPokemons({campo, valor}) {
  const pokemons = Object.values(pokemonsDB);
  if (campo && valor) {
    return pokemons.filter(pokemon => pokemon[campo] === valor);
  } else return pokemons;
}

// Resolutions para los mutations
function addPokemon({data}) {
  // db0fb82fdd3b78666f5d
  const id = crypto.randomBytes(10).toString("hex");
  const pokemon = new Pokemon(id, data);
  pokemonsDB[id] = pokemon;
  return pokemon;
}

function updatePokemon({id, data}) {
  if (!pokemonsDB[id]) {
    throw new Error(`No existe un pokemon con el id ${id}`);
  }
  const pokemon = new Pokemon(id, data);
  pokemonsDB[id] = pokemon;
  return pokemon;
}

function deletePokemon({id}) {
  if (!pokemonsDB[id]) {
    throw new Error(`No existe un pokemon con el id ${id}`);
  }
  const deletedPokemon = pokemonsDB[id];
  delete pokemonsDB[id];
  return deletedPokemon;
}

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: {
    getPokemon,
    getPokemons,
    addPokemon,
    updatePokemon,
    deletePokemon,
  },
  graphiql: true,
}))

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})